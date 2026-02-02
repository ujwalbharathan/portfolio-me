# Portfolio - Next.js TypeScript

A modern portfolio website built with Next.js and TypeScript.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
portfolio-me/
├── app/
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── About.tsx        # About section
│   ├── Blog.tsx         # Blog section
│   ├── Contact.tsx      # Contact section
│   ├── Navbar.tsx       # Navigation bar
│   ├── Portfolio.tsx   # Portfolio section
│   ├── Resume.tsx       # Resume section
│   └── Sidebar.tsx      # Sidebar component
├── public/
│   └── images/          # Static images
├── styles/
│   └── globals.css      # Global styles
└── package.json
```

## Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```
