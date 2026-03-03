// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const astroConfig = /** @type {import('astro').AstroUserConfig} */ ({
  vite: {
    plugins: [tailwindcss()],
  },
});

// Configure `site` and `base` for GitHub Pages project deployments when
// GITHUB_REPOSITORY is available (format: "owner/repo").
const githubRepo = process.env.GITHUB_REPOSITORY;
if (githubRepo) {
  const [owner, repo] = githubRepo.split('/');
  if (owner && repo) {
    astroConfig.site = `https://${owner}.github.io`;
    astroConfig.base = `/${repo}/`;
  }
}

export default defineConfig(astroConfig);
