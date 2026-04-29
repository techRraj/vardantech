import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

// Dynamically generate blog routes from the blog data file later
const blogPosts = [
  { slug: 'rise-of-ai-agents-2026' },
  { slug: 'scalable-chatbots-rag' },
  { slug: 'react-still-king-2026' },
  { slug: 'seo-saas-companies' },
  { slug: 'mobile-trends-2026' },
  { slug: 'vector-databases-explained' },
];

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://vardaantechhub.com',
      dynamicRoutes: [
        '/',
        '/about',
        '/services',
        '/portfolio',
        '/blog',
        '/careers',
        '/contact',
        ...blogPosts.map(post => `/blog/${post.slug}`)
      ],
      exclude: ['/api/*'],
    }),
  ],
});