// Pré-rendu des pages après `vite build`.
//
// Problème réglé : sur GitHub Pages, seule /index.html existe physiquement.
// Les adresses /services, /a-propos, etc. sont servies par 404.html (code HTTP 404),
// ce qui empêche leur référencement. Ce script ouvre chaque page du site dans un
// navigateur automatisé (Playwright) et enregistre le HTML rendu dans
// dist/<route>/index.html : GitHub répond alors 200 avec le contenu déjà présent.
//
// Si Playwright n'est pas disponible, le script se rabat sur une simple copie de
// dist/index.html dans chaque dossier de route : les pages répondent 200 mais le
// contenu reste rendu par le navigateur du visiteur.

import { createServer } from 'node:http';
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const ROUTES = ['/', '/services', '/formation', '/portfolio', '/a-propos', '/contact'];
const PORT = 4173;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};

async function fileExists(p) {
  try {
    return (await stat(p)).isFile();
  } catch {
    return false;
  }
}

// Petit serveur statique : sert dist/, et index.html pour toute route inconnue.
function startServer() {
  const server = createServer(async (req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    let filePath = path.join(DIST, decodeURIComponent(url.pathname));
    if (!(await fileExists(filePath))) filePath = path.join(DIST, 'index.html');
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(await readFile(filePath));
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

async function writeRoute(route, html) {
  const dir = route === '/' ? DIST : path.join(DIST, route);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, 'index.html'), html, 'utf8');
  console.log(`  ${route.padEnd(12)} -> ${path.relative(process.cwd(), path.join(dir, 'index.html'))}`);
}

async function fallbackCopy() {
  console.log('Playwright indisponible : copie de index.html dans chaque dossier de route.');
  const html = await readFile(path.join(DIST, 'index.html'), 'utf8');
  for (const route of ROUTES) {
    if (route !== '/') await writeRoute(route, html);
  }
}

async function prerender() {
  if (!existsSync(path.join(DIST, 'index.html'))) {
    throw new Error('dist/index.html introuvable : lancer `vite build` avant le pré-rendu.');
  }

  let chromium;
  try {
    ({ chromium } = await import('playwright'));
  } catch {
    await fallbackCopy();
    return;
  }

  const server = await startServer();
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    console.log('Pré-rendu des pages :');
    for (const route of ROUTES) {
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle' });
      // Laisse le temps aux animations d'entrée (framer-motion) de se terminer,
      // sinon les textes sont enregistrés avec opacity:0.
      await page.waitForTimeout(2500);
      const html = '<!doctype html>\n' + (await page.evaluate(() => document.documentElement.outerHTML));
      await writeRoute(route, html);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});