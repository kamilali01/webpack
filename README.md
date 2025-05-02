
# 🍽️ Restaurant Website (Webpack SPA)

A modular restaurant website built using **HTML**, **CSS**, and **Vanilla JavaScript**, bundled with **Webpack**. It simulates a Single Page Application (SPA) by dynamically loading content using JavaScript modules.

---

## 📸 Preview

Live preview: https://kamilali01.github.io/Restaurant-website/
---

## 🚀 Features

- 🧩 Modular JavaScript structure (Home, Menu, About)
- 📦 Built with Webpack for bundling
- 📱 Responsive layout
- 🌐 Footer with contact info and social media links
- 🔁 SPA-style navigation (no full-page reloads)

---

## 🗂️ Project Structure
restaurant-website/
├── dist/ # Bundled output (auto-generated)
├── src/
│ ├── index.js # Entry point
│ ├── home.js
│ ├── menu.js
│ ├── about.js
│ ├── greeting.js
│ ├── index.html
│ └── CSSs/
│ ├── style.css
│ ├── home.css
│ └── about.css
├── assets/ # Images, icons, etc.
├── package.json
├── webpack.config.js
└── README.md


---

## 📦 Technologies Used

- HTML5
- CSS3 (Modular stylesheets)
- JavaScript (ES6 modules)
- [Webpack](https://webpack.js.org/) (with style and asset loaders)

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/kamilali01/Restaurant-website.git
cd restaurant-website
(Note: You need to node installed.)
npx webpack 
--then run the code
or:
npx webpack serve --for running server, so you don't have to write npx webpack everytime you change the code
--then go to https://localhost:8080/  (it is default server, if it's not working check from terminal which localhost you using
