import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { defineConfig } from 'vite';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default defineConfig({
  base: '/repo/', // replace 'repo' with your repository name
});

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
