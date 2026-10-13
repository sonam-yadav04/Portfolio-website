
Live site: **[sonam-yadav04.github.io/Portfolio-website](https://sonam-yadav04.github.io/Portfolio-website/)**

Personal portfolio for Sonam Yadav, a Full Stack & GenAI Developer. Built as a single-page React app with smooth-scroll section navigation, an interactive resume preview, and a filterable project showcase.

## Features

- **Smooth-scroll navigation** with active-section highlighting (synced with the URL via `react-router-dom`)
- **Interactive resume modal** — preview the resume inline (Google Drive embed) or download it directly
- **Filterable project grid** — browse projects by category (GenAI & RAG, Microservices & Full Stack, Frontend & Web Apps) with a details modal for each
- **One-click contact actions** — copy email to clipboard, quick links to GitHub, LinkedIn, and LeetCode
- Sections: Home, About, Skills, Projects, Experience, Education, Contact

## Tech Stack

- **React 19** + **Vite 7**
- **react-router-dom** for routing
- **lucide-react** for icons
- Deployed to GitHub Pages via `gh-pages`

## Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
src/
├── App.jsx          # Layout, nav, resume modal, footer
├── Home.jsx          # Hero section + composes all page sections
├── About.jsx
├── Skills.jsx
├── Projects.jsx       # Project data + filterable grid + details modal
├── Experience.jsx
├── Education.jsx
├── Contact.jsx
└── style.css
```

## Connect

- **Email:** sonamyadav.ml@gmail.com
- **GitHub:** [@sonam-yadav04](https://github.com/sonam-yadav04)
- **LinkedIn:** [sonam-yadav-242149325](https://linkedin.com/in/sonam-yadav-242149325)
- **LeetCode:** [sonam_yadav4](https://leetcode.com/u/sonam_yadav4/)
