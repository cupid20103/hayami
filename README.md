# Hayami

Marketing landing page for **Hayami World**, a collection of 9,999 beautifully designed 3D NFTs on the Ethereum blockchain. The site presents the project's vision, gate key, roadmap, team, and social channels as a single animated single-page experience.

## Tech stack

- **React 18** (bootstrapped with Create React App)
- **react-router-dom v6** for routing
- **styled-components** for component-scoped styling
- **react-scroll** for smooth in-page section navigation
- **swiper** for the roadmap carousel
- **AOS** for on-scroll animations
- **react-icons** for icons

## Getting started

Prerequisites: [Node.js](https://nodejs.org/) (16+) and npm.

```bash
npm install
npm start
```

The app runs in development mode at [http://localhost:3000](http://localhost:3000) and reloads on changes.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the app in development mode. |
| `npm run build` | Build the production bundle into the `build` folder (source maps disabled). |
| `npm test` | Run the test runner in interactive watch mode. |
| `npm run eject` | Eject from Create React App (one-way operation). |

## Project structure

```
src/
  App.js                     Router and AOS initialization
  index.js                   React 18 entry point
  index.css                  Global styles, fonts, and CSS variables
  assets/                    Images, fonts, and inline SVGs
  components/                Reusable UI: Bot, LinkButton, Loading, SocialsLink, TeamMember
  layouts/
    landing-layout/          Header, page wrapper, and floating Discord widget
  pages/
    landing/                 Page sections: hero, realm, discord, roadmap, team, socials
  utils/                     Helpers and hooks (getScreenWidth, useIsMobile)
public/                      Static assets and HTML template
```

## Conventions

- Each section and component lives in its own folder with an `index.js` for markup and logic and a co-located `*.styled.js` for styled-components.
- Static content (nav links, team members, roadmap phases, socials) is kept in `data.js` files, separate from presentation.
- Responsive behavior is driven by props passed to styled-components and the shared `useIsMobile` hook.
- Double quotes are used throughout the codebase.

## Deployment

Run `npm run build` and serve the generated `build` folder with any static host. See the [Create React App deployment guide](https://create-react-app.dev/docs/deployment/) for platform-specific instructions.
