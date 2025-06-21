# Ambient Media Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## Features

- Clean, minimalist design with mountain landscape background
- Responsive bento box layout
- Smooth fade-in animations
- Contact form functionality
- Separate services page
- Mobile-optimized navigation

## Deployment to AWS Amplify

This project is configured for deployment on AWS Amplify with the following setup:

### Automatic Deployment

1. Connect your GitHub repository to AWS Amplify
2. Amplify will automatically detect the `amplify.yml` build configuration
3. The app will be built and deployed automatically

### Build Configuration

The project includes:
- `amplify.yml` - Build configuration for Amplify
- `_redirects` - SPA routing support
- Optimized Vite configuration with code splitting
- SEO-friendly meta tags

### Environment

- Node.js 18+ recommended
- Uses Vite for fast builds and development
- Client-side only deployment (static site)

## Local Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

This generates optimized static files in the `dist` directory ready for deployment.