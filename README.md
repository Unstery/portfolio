# My Astro Portfolio

Welcome to my Astro-themed portfolio website! This project was developed using React to showcase my professional background, including a brief introduction, links to my LinkedIn profile, email address, and CV. I also provide details about my experiences, projects, and educational background.

You can access the live website here: [My Portfolio](https://unstery.github.io/portfolio)

## ✨ Features
- Brief self-introduction
- Links to my LinkedIn profile
- Contact information (email)
- Downloadable CV
- Details about my experiences and projects
- Information about my educational background

## 💻 Technologies Used
- React
- Astro (static site generator)
- Tailwind
- i18n
- React Query
- ESLint
- GitHub Actions (for building and deploying)
- GitHub Pages (for hosting)

## 📁 Project Structure

The project structure is organized as follows:

```text
/
├── public/
├── src/
│   ├── api/
│   ├── components/
│   │   └── app.tsx
│   ├── layouts/
│   │   └── layout.astro
│   ├── modules/
│   │   └── portfolio/
│   ├── pages/
│   │   └── index.astro
│   ├── theme/
│   └── translations/
│       ├── en.json
│       └── fr.json
├── astro.config.mjs
└── package.json
```
Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.
- `public/`: Houses static assets such as images and the CV file.
- `src/`: Contains the source code for the website.
  - `api/`: Contains API-related code.
  - `components/`: Includes React components used throughout the project.
  - `layouts/`: Contains layout components to structure the website's pages.
  - `modules/`: Includes shared logic or utility functions used across the project.
  - `pages/`: Contains the individual pages of the website.
  - `theme/`: Houses styling and theming related assets, such as CSS or design system components.
  - `translations/`: Stores translation files for multi-language support.
- `astro.config.mjs`: Configuration file for Astro.
- `package.json`: Project dependencies.
- `README.md`: This documentation.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                     |
| :------------------------ | :--------------------------------------------------------- |
| `npm install`             | Installs dependencies                                      |
| `npm run dev`             | Starts local dev server at `localhost:4321/portfolio`      |
| `npm run build`           | Build your production site to `./dist/`                    |
| `npm run preview`         | Preview your build locally, before deploying               |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`           |
| `npm run astro -- --help` | Get help using the Astro CLI                               |

## 🚀 Deployment

The website is automatically built and deployed using GitHub Actions. The deployed version is available at [https://unstery.github.io/portfolio](https://unstery.github.io/portfolio).
