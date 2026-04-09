

## Plan: Add second slideshow to Portfolio

### Summary
Add a 5th portfolio item — a 2-image fading slideshow (orthomosaïque → relevé) with a 4-second interval, in the "Art rupestre" category.

### Steps

1. **Copy images to `src/assets/`**
   - `bambooramaComplet_copielight_2.jpg` (orthomosaïque)
   - `Bamboo_relevé_2_copie.jpg` (relevé)

2. **Update `src/pages/Portfolio.tsx`**
   - Add a 5th item with `type: 'slideshow'`, `interval: 4000`, images in order: orthomosaïque → relevé
   - Title: "Orthomosaïque et relevé – Bamboo Hollow"
   - Category: "Art rupestre"

3. **Update `FadingSlideshow` usage**
   - The component already accepts an `interval` prop — the new item will pass `4000` (4s) instead of the default 2500ms
   - Pass interval through the Portfolio grid and modal renderings

### Technical Detail
- The `FadingSlideshow` component already supports a custom `interval` prop, so no component changes needed
- Need to add `interval` to the `PortfolioItem` type and thread it through the grid thumbnail and modal renders

