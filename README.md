# Sri Ramakrishna Homeopathic Center 🌿

A premium, future-ready digital clinic homepage for **Sri Ramakrishna Homeopathic Center**, featuring advanced clinical features, bilingual options (English/मराठी), offline support (PWA), and streamlined appointment booking.

---

## 🚀 Key Features

*   **Bilingual Experience (English / मराठी):** Complete localized interface built with custom React i18n hooks, automatically detecting the browser language and persisting user choices.
*   **Theme Toggle (Light / Dark):** Modern, premium color systems designed for high contrast and reduced eye strain.
*   **PWA / Service Worker:** Full offline caching support using service worker scripts (`sw.js`). Patients can access the clinic's location, timings, and phone details even without active internet.
*   **Working Slot Booking:** Predefined timing slots for morning (`9 AM - 2 PM`) and evening (`5 PM - 10 PM`) sessions (Saturdays closed). Compiles details directly into a pre-formatted message and triggers a WhatsApp consultation request.
*   **Bento Grid Specialties:** Structured, accessible layout cards presenting all clinic specialties with responsive, animated indicators.
*   **Healing Food Science Explorer:** A custom visual database explaining natural dietary foods (Karela, Turmeric, Fenugreek, Jamun, Cinnamon, Amla) backed by published NIH/PubMed research links.
*   **Patient Progress Timeline:** An interactive vertical timeline visually tracking HbA1c reductions and insulin weaning.
*   **Bilingual Notice Banner:** Active reminders to call or WhatsApp the clinic before making an in-person visit.

---

## 🛠️ Technology Stack

*   **Core:** React 18 + TypeScript + Tailwind CSS v3
*   **Icons:** Lucide React
*   **Build Tool:** Vite v5
*   **Offline:** Progressive Web App (PWA) Manifest + Service Worker

---

## 📁 Key Directory Structure

```
├── public/
│   ├── manifest.json         # PWA configuration
│   └── sw.js                 # Offline service worker
├── src/
│   ├── App.tsx               # Main layout
│   ├── index.css             # Main styling, variables, CSS animations
│   ├── components/
│   │   ├── layout/           # Navbar, MobileBottomBar, Footer
│   │   ├── hero/             # Morphing Hero visual
│   │   ├── booking/          # Custom calendar & time slot picker
│   │   ├── food-science/     # Research food explorer
│   │   └── timeline/         # Patient journey vertical timeline
│   ├── i18n/                 # Translations (EN/मराठी)
│   └── theme/                # Custom dark/light mode hooks
```

---

## 🖥️ Local Execution & Administration

We provide a built-in admin batch script to manage operations on Windows.

Double-click the **[manage-project.bat](file:///d:/00DevOpsGitHub/GitHub/Sri-Ramakrishna-Homeopathic-Center/manage-project.bat)** script in your file manager to run these options:
1.  **Start Development Server:** Runs Vite server in a separate background window.
2.  **Install Project Dependencies:** Installs packages using `npm install`.
3.  **Build & Deploy Project Assets:** Compiles the build assets (`dist`) and deploys them to the target folder.
4.  **Stop Development Server:** Automatically stops any running background server.
5.  **Exit Console:** Exits the command line.

---

## 🌐 Deploying to GitHub Pages

The compiled production assets are deployed to the `release-pages` branch, which serves as the static entry point for GitHub Pages hosting.

### Manual Build & Copy:
```bash
# 1. Compile Vite production assets
npm run build

# 2. Deploy compiled assets to the release-pages branch
# (This is handled automatically by the deploy pipeline or script)
```

---

### Medical Disclaimer
*Homeopathy supports natural healing mechanisms. Always coordinate any diagnostic changes or medication adjustments directly with Dr. Nandkumar Gavde.*
