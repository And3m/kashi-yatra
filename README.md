# 🕉️ Kashi Yatra — A Sacred Pilgrimage to Varanasi

A premium, visually rich, and interactive single-page travel blog and planning portal built for a 3-day pilgrimage to Varanasi (Kashi). It is designed to assist in coordinating the sacred rites of **Asthi Visarjan** (immersing of ancestral ashes) and exploring the historic temples of the eternal city.

The site is fully responsive, optimized for mobile viewing (ideal for on-the-go tracking), and integrates spiritual insights and logistics from scholars like **Sri Nanduri Srinivas** (specifically targeting the 12 secrets of Kashi).

---

## 🌟 Key Features

*   **Interactive Day-Wise Itinerary**: Toggle between Day 1 (Arrival), Day 2 (Rituals & Core Temples), and Day 3 (Departure).
*   **Logistical Accordions**: Click on individual time slots to reveal detailed travel times, temple rules (dress codes, mobile restrictions), and step-by-step guidance.
*   **Sri Nanduri Srinivas's Secrets Showcase**: A beautifully stylized visual grid detailing key spiritual points (e.g., the underground Ugra Varahi Temple timings, the 12:00 PM Manikarnika Kund midday bath, and the alignment of the Gyanvapi Nandi).
*   **Persistent Packing Checklist**: An interactive checklist split by category (Rituals, Documents, Clothes, Electronics). It tracks packing progress and saves your checkmarks locally in the browser's `localStorage` so it remains intact when you refresh or view it on your phone.
*   **Local Travel Tips**: Crucial recommendations for local transport (e-rickshaws and boat hire) and famous street food recommendations.

---

## 🎨 Design System & Aesthetics

*   **Palette**: Built with a theme inspired by the colors of Kashi — **Sacred Saffron** (`#e05a1f`), **Temple Gold** (`#d4af37`), and **Midnight Slate** (`#090d16`) representing the night Ganges.
*   **Visual Style**: Clean glassmorphism cards (`backdrop-filter`), smooth hover animations, pulsing active-slot indicators, and a clean custom vertical timeline.
*   **Typography**: Serif headlines (**Playfair Display**) for a historic and spiritual feel, paired with modern sans-serif body text (**Outfit**).

---

## 🛠️ Technology Stack

*   **Structure**: Semantic HTML5.
*   **Styling**: Custom Vanilla CSS (No framework dependencies, pure custom properties, custom checkboxes, and keyframe animations).
*   **Interactivity**: Vanilla JavaScript (DOM manipulation, event filtering, accordion transitions, and persistent storage via `window.localStorage`).

---

## 🚀 How to Run Locally

1.  **Direct File Execution**: Open `index.html` in any web browser.
2.  **Using a Local Server**: To ensure all paths and local storage mechanics function exactly like a live web server, open a terminal in the project directory and run:
    ```bash
    python -m http.server 8000
    ```
    Then, navigate to `http://localhost:8000` in your browser.

---

## 🌐 Deploying to GitHub Pages

Since this is a static project, it can be hosted for free on GitHub Pages:

1. Create a new **Public** repository on GitHub named `kashi-yatra`.
2. Connect your local folder and push:
    ```bash
    git init
    git add .
    git commit -m "Initial Commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/kashi-yatra.git
    git push -u origin main
    ```
3. Go to the repository's **Settings > Pages**.
4. Set the build source to **Deploy from a branch**, select the **`main`** branch, and click **Save**.
5. Your page will be live shortly at `https://YOUR_USERNAME.github.io/kashi-yatra/`.
