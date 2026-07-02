# Priyansu Store

A modern, high-end online e-commerce store built with React, Vite, and Tailwind CSS. 
This project features a clean shopping experience, curated products, and a fully functional frontend cart and checkout system.

## Features

- **Modern Design**: Built with Tailwind CSS and shadcn-ui components.
- **Shopping Cart**: Full state management for adding items and adjusting quantities.
- **Checkout Flow**: Sleek checkout page calculating subtotals and shipping.
- **Responsive**: Fully responsive design for mobile and desktop screens.

## Technologies Used

- [Vite](https://vitejs.dev/) - Frontend Tooling
- [React](https://reactjs.org/) - UI Framework
- [TypeScript](https://www.typescriptlang.org/) - Static Typing
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn-ui](https://ui.shadcn.com/) - UI Components

## Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd <YOUR_PROJECT_FOLDER>
   ```

2. **Install dependencies:**
   You can use npm or bun.
   ```bash
   npm install
   # or
   bun install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. Open your browser and visit the URL shown in your terminal (usually `http://localhost:5173` or `http://localhost:8080`).

## Hosting on Vercel

Deploying this project to Vercel is extremely easy as it's a standard Vite project.

1. Create a GitHub repository and push your local code to it.
2. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.
3. Click on **Add New... > Project**.
4. Import the repository you just created.
5. Vercel will automatically detect that it's a Vite project. The default build settings will work perfectly:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**.

Once finished, your site will be live with a free `.vercel.app` domain, and you can add a custom domain in the project settings!
