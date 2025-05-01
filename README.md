# Brandon Christensen Portfolio

A professional, modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark/light mode with dark mode as default
- 📱 Fully responsive design
- ⚡ Fast performance
- ♿ Accessible UI
- 🔄 Smooth animations with Framer Motion
- 🧩 Component-based architecture
- 📝 TypeScript for type safety

## Tech Stack

- **Framework**: Next.js 15.x
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **Animations**: Framer Motion 12.x
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/brandonchristensencs/brandonchristensencs.github.io.git
cd brandonchristensencs.github.io
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

Build the project:

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run start
# or
yarn start
```

## Deployment to GitHub Pages

### Setup GitHub Pages Action

1. Create a new file at `.github/workflows/nextjs.yml`:

```yaml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: 'npm'

      - name: Setup Pages
        uses: actions/configure-pages@v3
        with:
          static_site_generator: next

      - name: Install dependencies
        run: npm ci

      - name: Build with Next.js
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

2. Update the `next.config.js` file to support static exports:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
```

3. Push these changes to your GitHub repository.

4. Go to your GitHub repository settings, navigate to "Pages," and ensure the source is set to "GitHub Actions."

## Project Structure

```
.
├── components/
│   ├── layout/        # Layout components
│   ├── sections/      # Page sections
│   └── ui/            # Reusable UI components
├── hooks/             # Custom React hooks
├── pages/             # Next.js pages
├── public/            # Static assets
├── styles/            # Global CSS
├── types/             # TypeScript types
└── app/               # App Router components
```

## Customization

- **Content**: Update the placeholder text and images in the section components.
- **Colors**: Modify the color scheme in `tailwind.config.js`.
- **Projects**: Add or remove projects in the `Projects.tsx` file.
- **Skills**: Update skills in the `About.tsx` file.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Brandon Christensen
