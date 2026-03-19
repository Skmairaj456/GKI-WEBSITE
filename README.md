# GKI Events and Travels (OPC) Private Limited

A premium, responsive 2-page corporate website for **GKI Events and Travels (OPC) Private Limited** — an events management, travel, and brand activations company.

---

## Overview

- **Purpose:** Corporate presence, trust-building, and lead generation  
- **Audience:** Corporate clients, event organisers, travel customers  
- **Style:** Clean, modern, luxury aesthetic with platinum background and rose-gold accents  
- **Stack:** HTML, CSS, JavaScript (no backend; static site)

---

## Project Structure

```
gki travels/
├── index.html          # Home page
├── contact.html        # Contact page
├── styles.css          # All styles (responsive, luxury theme)
├── script.js           # Navigation, form, animations
├── logos/              # Client logo images (see Logo filenames below)
├── README.md           # This file
└── [GKI about/]        # Optional: folder with founder portrait image
```

---

## Pages & Sections

### Page 1 — Home (`index.html`)

1. **Hero** — Headline, tagline, primary CTA  
2. **Services** — Events, Travels, Activations (three columns)  
3. **Our Philosophy** — Short brand story  
4. **Why Choose GKI** — Craftsmanship, attention to detail, premium execution  
5. **Founder Profile** — Mr. A. Damien Richard; image + biography  
6. **Our Esteemed Clients** — Logo grid (trusted brands)  
7. **Call to Action** — Contact prompt + button  
8. **Footer** — Logo, nav links, copyright  

**Other elements:**  
- Sticky nav with EVENTS, TRAVELS, ACTIVATIONS, ABOUT, CONTACT  
- Mobile: hamburger menu with slide-out nav  
- Full-width “GKI” watermark in background  

### Page 2 — Contact (`contact.html`)

- Hero with contact-focused headline  
- **Contact info:** Phone (click-to-call), email, office address  
- **Form:** Name, Email, Phone, Message + Submit  
- Same nav and footer as home  

---

## Design System

| Element        | Specification                                      |
|----------------|----------------------------------------------------|
| **Background**  | Platinum / warm off-white (`#FAF8F6`)             |
| **Accent**     | Rose gold (`#C89B6A`, `#D2A679`, `#B88A5A`)       |
| **Headings**   | Deep charcoal (`#1F1F1F`)                         |
| **Body text**  | Muted grey (`#6B6B6B`)                             |
| **Fonts**      | Playfair Display (serif), Montserrat (sans-serif) |
| **Buttons**    | Rounded; rose-gold fill; white text; hover darken |

---

## Client Logos (Our Esteemed Clients)

Place official brand logos in the `logos/` folder using **exact** filenames (case-sensitive):

1. `hatsun-agro-product.png`  
2. `arun-ice-cream.png`  
3. `arokya-milk.png`  
4. `ibaco.png`  
5. `hanobar.png`  
6. `aha.png`  
7. `royal-enfield.png`  
8. `ather-energy.png`  
9. `radio-mirchi.png`  
10. `suzuki.png`  
11. `tvs-motor.png`  
12. `yamaha.png`  
13. `hero-motocorp.png`  
14. `kingfisher.png`  
15. `tata-group.png`  
16. `indifest.png`  
17. `tamada-media.png`  
18. `jsw-group.png`  
19. `itc-limited.png`  
20. `freedom-oil.png`  
21. `red-fm.png`  
22. `big-fm.png`  
23. `groupm.png`  
24. `dainik-jagran-solutions.png`  
25. `dewars.png`  
26. `william-lawsons.png`  
27. `tata-glucose.png`  
28. `triumph-motorcycles.png`  

Format: PNG or SVG; transparent background preferred. Logos show grayscale by default and full colour on hover.

---

## Contact Details (as in site)

- **Phone:** +91 86863 18973 (click-to-call: `tel:+918686318973`, WhatsApp: `https://wa.me/918686318973`)  
- **Email:** info@gkieventsandtravels.com  
- **Address:** Placeholder — replace in `contact.html` with real office address  

---

## Founder Image

Founder section uses:

- Path: `../GKI about/WhatsApp Image 2026-01-18 at 8.40.54 PM.jpeg`  
- To use a local path, either keep that path relative to the HTML file or move the image into the project and update the `src` in `index.html`.

---

## Responsive Behaviour

- **Desktop:** Full layout; 3-column services; 6–8 client logos per row.  
- **Tablet (~968px):** 2-column services; 4 logos per row; stacked contact layout.  
- **Mobile (~768px):** Hamburger menu; single-column sections; 3 then 2 logos per row.  
- **Small mobile (~480px):** Tighter spacing and smaller type.

Viewport meta tag is set for correct scaling on phones and tablets.

---

## How to Run

1. Ensure all files are in one folder (including `logos/` and optional `GKI about/`).  
2. Open `index.html` in a browser (double-click or “Open with” browser).  
3. Or use a local server, e.g.:
   - **Python 3:** `python -m http.server 8000` → visit `http://localhost:8000`  
   - **Node:** `npx serve` (if you have Node.js)  

No build step or backend required.

---

## Customisation Checklist

- [ ] Replace contact page **office address** in `contact.html`.  
- [ ] Add/update client logos in `logos/` with correct filenames.  
- [ ] Confirm founder image path in `index.html` (or move image and update path).  
- [ ] Point contact form to your backend/email service if you add one later.  
- [ ] Update year in footer if needed (e.g. “© 2025 …”).

---

## Browser Support

- Modern Chrome, Firefox, Safari, Edge  
- Mobile browsers (iOS Safari, Chrome Android)  
- Uses standard HTML5, CSS3, and vanilla JavaScript (no frameworks).

---

## Licence & Credits

- **Client:** GKI Events and Travels (OPC) Private Limited  
- **Content:** Company-provided (founder bio, services, client list).  
- **Fonts:** Google Fonts (Playfair Display, Montserrat).  

---

*For questions or updates, maintain this README when you change structure, contact details, or logo set.*
