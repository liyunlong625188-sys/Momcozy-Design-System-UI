# Group Pumping Moms Demo QA

## Reference and scope

- Reference: `https://grouppumpingmoms.netlify.app/`
- Local route: `http://127.0.0.1:5177/group-pumping`
- Verified views: community overview, Pumping Moms group, Mobile Flow 9 group, join dialog, status picker, and post composer.

## Visual comparison

- The community overview keeps the reference information architecture: campaign, groups, topics, featured content, feed, post action, and bottom navigation.
- The overview is rebuilt as semantic DOM instead of using the light-mode screenshot as the interface layer.
- Images are content media only; they retain their source colors and receive a restrained dark-mode brightness adjustment.
- The local desktop wrapper intentionally adds the project-level device frame and theme control outside the embedded demo.

## Token and theme checks

- All editable hexadecimal UI colors were removed from the local example.
- Editable translucent UI colors use Momcozy token-derived `color-mix()` values.
- Remaining `rgba()` values are embedded SVG image data or Canvas animation effects.
- Overview surfaces use `Colors / Backgrouds`; copy uses `Colors / Text`; dividers and outlines use `Colors / Border`.
- Primary and secondary actions pair `Semantic / Fills / Mom` with the corresponding `Semantic / Labels / Mom` token, including the updated dark-mode label values.
- The same light/dark theme message drives the overview, group feed, dialogs, status picker, and post composer.
- Brand headings use the Momcozy brand font; interface copy uses the Momcozy UI font.

## Interaction and responsive checks

- Pumping Moms and Mobile Flow 9 links open inside the preview frame.
- Join, Got it, Add Status, status picker close, and Post interactions work.
- The theme button synchronizes the outer preview and embedded page.
- Mobile layout is exactly viewport-sized with no document-level overflow.
- All overview token references resolve against `momcozy-theme.css`.

## Verification

- `pnpm lint`: passed.
- `pnpm build`: passed.
- Momcozy token audit: passed, including 383 variables, 83 colors, typography, opacity, spacing, radius, shadow, and status roles.

Final result: passed.
