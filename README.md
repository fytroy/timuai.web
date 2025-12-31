 Timu AI Marketing Site

 ![1](1.png)

A multi-page static website for Timu AI, showcasing intelligent automation and data solutions. The site includes marketing pages, service overviews, case studies, and a Netlify-ready contact form.

 Pages
- Landing: index.html
- Services: services.html
- About: about.html
- Case Studies: case-studies.html
- Contact: contact.html (Netlify form enabled)

 Features
- Responsive layout with shared styling in [css/main.css](css/main.css).
- Sticky header, mobile navigation drawer, and scroll-triggered animations powered by [js/main.js](js/main.js).
- Netlify Forms support on the contact page plus a success redirect defined in [netlify.toml](netlify.toml).
- Reusable call-to-action sections and service highlights for quick updates.

 Project Structure
```
.
├─ index.html
├─ services.html
├─ about.html
├─ case-studies.html
├─ contact.html
├─ netlify.toml
├─ css/
│  └─ main.css
├─ js/
│  └─ main.js
└─ assets/
   └─ images/
```

 Run Locally
1) Open `index.html` directly in your browser, or
2) Serve the folder to test routing/redirects:
```bash
 From the project root
npm install -g serve
serve .
```
Then visit the printed local URL (e.g., http://localhost:3000).

 Deploy
- Netlify: the repo is deploy-ready. The form uses `data-netlify="true"` in [contact.html](contact.html), and [netlify.toml](netlify.toml) sets a redirect to a success page after submission.
- Any static host (S3, Vercel static, GitHub Pages) works; just upload the root files and assets directory.

 Customize
- Update page copy and sections directly in the HTML files.
- Adjust global styles in [css/main.css](css/main.css); add new components following existing utility patterns.
- Extend interactivity (e.g., more animations or menu behaviors) in [js/main.js](js/main.js).
- Replace images inside [assets/images](assets/images) to match your brand.

 Notes
- No build tooling or package dependencies are required.
- Fonts are loaded from Google Fonts (Inter and Manrope).
- License is not specified; add one if you plan to distribute.
