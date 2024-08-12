import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  esbuild: {
    jsx: 'transform',
    jsxDev: false,
    jsxImportSource: './jsx.ts',
    jsxInject: "import { jsx } from './jsx'",
    jsxFactory: 'jsx',
    jsxFragment: 'jsx.Fragment',
  },
});
