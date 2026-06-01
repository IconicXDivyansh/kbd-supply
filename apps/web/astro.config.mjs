// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    fonts: [{
        provider: fontProviders.google(),
        name: 'IBM Plex Sans',
        cssVariable: '--font-ibm-plex-sans',
        weights: [400, 500, 600, 700],
        styles: ['normal']
    }, {
        provider: fontProviders.google(),
        name: 'IBM Plex Serif',
        cssVariable: '--font-ibm-plex-serif',
        weights: [400, 500, 600, 700],
        styles: ['normal']
    }, {
        provider: fontProviders.google(),
        name: 'Kalam',
        cssVariable: '--font-kalam',
        weights: [400, 700],
        styles: ['normal']
    }],
  
});
