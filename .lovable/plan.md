

## Plan: Add fading animation item to Portfolio

### Summary
Add a 4th portfolio item that displays a looping slideshow of 3 photos with a fade transition (2-3s per image). The existing 3 video items keep their red "Vidéo" badge; the new item gets a red "Animation" badge.

### Steps

1. **Copy the 3 uploaded images to `src/assets/`**
   - `fausse_pierre_ortho.jpg`
   - `fausse_pierre_tous_impacts.jpg`
   - `fausse_pierre_relevé.jpg`

2. **Create `src/components/media/FadingSlideshow.tsx`**
   - Takes an array of image URLs as prop
   - Cycles through images with a ~2.5s interval
   - Uses CSS opacity transitions (1s fade) for smooth crossfade
   - All images are stacked absolutely; only the active one has `opacity: 1`

3. **Update `src/pages/Portfolio.tsx`**
   - Add a new `type: 'slideshow'` to the `PortfolioItem` type with a `slideshowImages` field
   - Add the 4th item (category "Art rupestre", type "slideshow") with images in order: ortho → impacts → relevé
   - In the grid thumbnail rendering, use `FadingSlideshow` for slideshow items with a red "Animation" badge
   - In the modal, render the full-size `FadingSlideshow`

### Technical Details
- The slideshow uses `useState` + `useEffect` with `setInterval` to cycle the active index
- Images are layered with `position: absolute` and `transition: opacity 1s ease-in-out`
- Badge logic: `youtube` → "Vidéo" (red), `slideshow` → "Animation" (red), `sketchfab` → "Modèle 3D" (primary)

