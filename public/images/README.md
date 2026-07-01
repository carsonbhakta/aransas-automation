# Photos the landing page uses

All four slots are filled and wired into the page. To swap any of them, drop a
new file in this folder with the same name and it updates everywhere it appears.

| # | File name             | Where it shows                 | Notes                                                                 |
|---|-----------------------|--------------------------------|-----------------------------------------------------------------------|
| 1 | `hero-water.jpg`      | Top banner behind the headline | Rockport/Fulton harbor aerial. Keep the main subject up top; white text sits over the bottom-left. |
| 2 | `owner-dashboard.png` | The phone in the hero          | Currently the design mock. Swap for a real phone screenshot of the demo admin when ready. |
| 3 | `website-laptop.png`  | "Bookings" section             | Transparent-background laptop mockup, so it must stay PNG (JPEG can't do transparency). |
| 4 | `orders-page.jpg`     | "Your money" section           | Screenshot of the demo admin orders page.                              |
| 5 | `logo.png`            | Header, final CTA, icons, OG image | Cream AA mark on transparent background. Needs a dark backdrop to be visible. |

Notes:
- Next.js optimizes and resizes everything at request time, so big files are fine.
- Keep transparency in mind: anything shown without a card frame (laptop, logo)
  needs a transparent PNG.
