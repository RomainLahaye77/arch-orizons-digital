# Remplacement de l'adresse email de contact

## Objectif
Remplacer l'adresse email `romain.lahaye@archeorizons.fr` par `romain.lahaye@proton.me` partout où elle apparaît dans l'application.

## Fichiers concernés
- `src/pages/Contact.tsx` : lien `mailto` et texte affiché dans la section Coordonnées.
- `src/components/layout/Footer.tsx` : lien `mailto` et texte affiché dans la colonne Contact du pied de page.

## Modifications prévues
Dans chaque fichier, remplacer les deux occurrences de `romail.lahaye@archeorizons.fr` par `romain.lahaye@proton.me` (attribut `href` et contenu texte).

## Vérification
Relecture des deux fichiers et lancement d'une recherche globale pour s'assurer qu'aucune occurrence de l'ancienne adresse ne subsiste.
