import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsx: 'transform',
    jsxDev: false,
    jsxImportSource: './jsx.ts',
    jsxInject: "import { jsx } from './jsx'",
    jsxFactory: 'jsx',
    jsxFragment: 'jsx.Fragment',
  },
});
