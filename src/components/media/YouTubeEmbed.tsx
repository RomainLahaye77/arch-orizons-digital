import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

type Props = {
  youtubeId: string;
  title: string;
  thumbnailUrl?: string;
};

let youtubeApiPromise: Promise<any> | null = null;

function loadYouTubeIFrameAPI() {
  if (typeof window === 'undefined') return Promise.reject(new Error('No window'));
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (youtubeApiPromise) return youtubeApiPromise;

  youtubeApiPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-youtube-iframe-api="true"]');
    if (existing) {
      // Script already present; wait for YT to be ready.
      const interval = window.setInterval(() => {
        if (window.YT?.Player) {
          window.clearInterval(interval);
          resolve(window.YT);
        }
      }, 50);
      window.setTimeout(() => {
        window.clearInterval(interval);
        if (!window.YT?.Player) reject(new Error('YT API load timeout'));
      }, 8000);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    script.dataset.youtubeIframeApi = 'true';

    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve(window.YT);
    };

    script.onerror = () => reject(new Error('Failed to load YouTube IFrame API'));
    document.head.appendChild(script);

    window.setTimeout(() => {
      if (!window.YT?.Player) reject(new Error('YT API load timeout'));
    }, 8000);
  });

  return youtubeApiPromise;
}

export default function YouTubeEmbed({ youtubeId, title, thumbnailUrl }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);
  const [mode, setMode] = useState<'loading' | 'embedded' | 'fallback'>('loading');

  useEffect(() => {
    if (!youtubeId) {
      setMode('fallback');
      return;
    }

    let cancelled = false;

    const setup = async () => {
      try {
        await loadYouTubeIFrameAPI();
        if (cancelled) return;
        if (!containerRef.current) return;

        // Reset container (important when switching items)
        containerRef.current.innerHTML = '';

        playerRef.current = new window.YT.Player(containerRef.current, {
          videoId: youtubeId,
          width: '100%',
          height: '100%',
          playerVars: {
            rel: 0,
            modestbranding: 1,
          },
          events: {
            onReady: () => {
              if (!cancelled) setMode('embedded');
            },
            onError: (e: any) => {
              // 101 / 150 = embedding disabled for this video
              // Fallback also for other errors (private, removed, etc.)
              if (!cancelled) setMode('fallback');
              // Keep a breadcrumb for debugging if needed
              // eslint-disable-next-line no-console
              console.warn('[YouTubeEmbed] player error', { youtubeId, code: e?.data });
            },
          },
        });
      } catch (err) {
        if (!cancelled) setMode('fallback');
        // eslint-disable-next-line no-console
        console.warn('[YouTubeEmbed] API load failed', err);
      }
    };

    setMode('loading');
    setup();

    return () => {
      cancelled = true;
      try {
        playerRef.current?.destroy?.();
      } catch {
        // ignore
      }
      playerRef.current = null;
    };
  }, [youtubeId]);

  if (mode === 'fallback') {
    return (
      <div className="w-full h-full relative flex items-center justify-center">
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover absolute inset-0"
            loading="lazy"
          />
        ) : null}
        <div className="absolute inset-0 bg-primary/60 flex flex-col items-center justify-center gap-4">
          <p className="text-primary-foreground text-center px-4 text-sm">
            Impossible d'intégrer cette vidéo ici. Vous pouvez l'ouvrir directement sur YouTube.
          </p>
          <a
            href={`https://www.youtube.com/watch?v=${youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-destructive hover:bg-destructive/90 text-destructive-foreground px-6 py-3 rounded-full font-medium transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
            Voir sur YouTube
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      {/* YT API replaces this div with an iframe */}
      <div ref={containerRef} className="w-full h-full" aria-label={title} />
      {mode === 'loading' && (
        <div className="absolute inset-0 bg-muted animate-pulse" aria-hidden="true" />
      )}
    </div>
  );
}
