# 💌 Valentine's Envelope

A small animated Valentine's card built with vanilla HTML, CSS and JS — no frameworks, no dependencies (other than Font Awesome for the icons).

An envelope slides up from the bottom of the screen, revealing a letter with subtle "burn" marks and text that glows letter by letter on hover. A wax seal opens with a heartbeat animation, and a steady rain of hearts falls in the background — one in ten is golden, and clicking it triggers a small explosion.

## ✨ Features

- **Slide-in on load**: the envelope animates in from off-screen when the page loads.
- **Glowing letter text**: hovering a paragraph lights up each character in sequence, with a wave-like ripple effect caused by an animated `padding` shift.
- **Falling hearts**: a continuous rain of hearts, each with randomized size and fall duration.
  - **Golden hearts** (~10% chance) last longer on screen and can be **clicked** to trigger an explosion animation before being removed from the DOM.
- **Idle shake**: if there's no mouse movement or click for 10 seconds, the envelope shakes — repeating every 5 seconds until you interact again.
- **Wax seal**: a checkbox-powered seal (accessible via keyboard/label) that plays a heartbeat animation when toggled.

## 🗂️ Project structure

```
valentine-envelope/
├── index.html
├── css/
│   ├── main.css       # entry point, imports everything below
│   ├── base.css        # reset + body layout
│   ├── envelope.css    # envelope shape, slide-in, hover, shake
│   ├── seal.css         # wax seal + heartbeat animation
│   ├── letter.css       # letter box + glowing text effect
│   ├── burns.css        # decorative "burn" marks
│   └── hearts.css       # falling hearts + golden heart explosion
└── js/
    └── script.js
```

The CSS is split by component so each file stays focused and easy to scan — `main.css` just imports them in the right order.

## 🛠️ Built with

- HTML / CSS / JavaScript (vanilla, no build step)
- [Font Awesome](https://fontawesome.com/) for icons (loaded via CDN)

## 🚀 Running it

No build step needed — just open `index.html` in a browser, or serve the folder with any static server.

---

Made by Kiri · [@kiri](https://instagram.com/your_instagram)
