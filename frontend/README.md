# GDGC GESCOE - Frontend

Welcome to the frontend codebase for the official Google Developer Groups on Campus (GDGC) GESCOE chapter website! This project is built with a modern React stack, emphasizing performance, stunning aesthetic design (glassmorphism & subtle glows), scalability, and a modular UI architecture.

---

## 🚀 Tech Stack

This project utilizes the following technologies to deliver a premium and responsive experience:

- **React (v19)**: A powerful UI library for building dynamic user interfaces.
- **Vite**: A fast build tool and development server that significantly enhances developer productivity.
- **Tailwind CSS (v4)**: A utility-first CSS framework for rapid and consistent UI development.
- **Framer Motion / Motion**: For smooth, high-quality micro-animations and scroll effects that give the site a lively feel.
- **React Router DOM**: Declarative routing to handle navigation between our modular page components seamlessly.
- **Lucide React**: Beautiful, consistent, and scalable SVG icons.

---

## 📁 Project Structure

The frontend project structure is completely modularized for maintainability and optimized lazy-loading:

```text
frontend/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, logos, and raw JSON data (e.g., members.json)
│   ├── components/         # Reusable UI building blocks
│   │   ├── About/          # Modular About section components (Hero, Values, CTA, etc.)
│   │   ├── Events/         # Event cards, dialogs, and specific event layouts
│   │   ├── Team/           # Shared team member cards and sections
│   │   ├── ui/             # Generic, low-level UI elements (animations & tickers)
│   │   └── Navbar, Loader, Footer, etc.
│   │
│   ├── pages/              # High-level route components
│   │   ├── HomePage/
│   │   ├── AboutPage/      # Centralized About coordinator with Device-specific rendering
│   │   ├── EventPage/
│   │   └── TeamPage/       # Distinct Desktop and Mobile optimization logic
│   │
│   ├── App.jsx             # Root routing coordinator with Suspense boundaries
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles + unified theme variables (colors, glows, shadows)
│
├── index.html              # Main HTML entry file
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite bundler configuration
```

---

## 🎨 Design System

Our frontend adheres to a strict, premium design aesthetic driven by Google's primary branding but elevated into a modern dark mode interface.

### Thematic Colors (CSS Variables)

- **Primary Brand Colors**:
  - Blue: `#4285F4` (`--gdg-blue`)
  - Red: `#EA4335` (`--gdg-red`)
  - Yellow: `#F9AB00` (`--gdg-yellow`)
  - Green: `#34A853` (`--gdg-green`)
- **System Colors**:
  - Background: `#0A0A0A` (Deep sleek dark mode)
  - Foreground/Text: `#FFFFFF`
  - Border: `rgba(255, 255, 255, 0.1)`

### Aesthetic Signatures

- **Glassmorphism**: Consistent use of `backdrop-blur-xl`, `bg-white/[0.03]`, and `border-white/10` to create a layered, translucent card effect.
- **Dynamic Lighting**: Subtle radial gradients and glows utilizing our primary colors to highlight active components.
- **Micro-animations**: Smooth hover transitions, scale effects, and animated text tracking.

---

## � Responsiveness & Performance

- **Device-Specific Rendering**: Pages like `About` and `Team` conditionally render entirely different component trees (`DesktopTeam.jsx` vs `MobileTeam.jsx`) to ensure that heavy animations and effects are excluded from mobile views, guaranteeing smooth scrolling and better battery life on less powerful devices.
- **Lazy Loading**: The application employs React `lazy` and `Suspense` at the route level (`App.jsx`) and at the component level (e.g., `DesktopAbout.jsx` rendering below-the-fold content) to minimize bundle sizes and maximize initial load speeds.

---

## 🛠️ Installation

### Prerequisites

Make sure you have Node.js installed on your machine.

### Setup

To set up the project locally, navigate into the `frontend` directory and run the following command to fetch dependencies:

```bash
npm install
```

### 💻 Development

Start the Vite development server using:

```bash
npm run dev
```

The application will be accessible at:
[http://localhost:5173](http://localhost:5173)

---

## 🧑‍💻 Contributing Rules

- Ensure you reuse existing design tokens defined in `src/index.css`. Ad-hoc hex codes are strictly discouraged.

- Preserve the mobile performance separation. Only load heavy animations on desktop viewports.
