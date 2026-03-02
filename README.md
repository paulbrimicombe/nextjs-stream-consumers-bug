# Bug reproduction for `stream/consumers` import issues

1. Install dependencies: `npm install`
2. Attempt to build the code using TurboPack: `npm run build` — the error `Module not found: Can't resolve 'stream/consumers'` will be displayed
3. Attempt to build the code using Webpack: `npm run build -- --webpack` — no errors will be shown
4. Update the code in `page.tsx` to add the `node:` prefix to the `stream/consumers` import
5. Attempt to build the code using TurboPack: `npm run build` — the error `Cannot find module 'node:stream/consumers': Unsupported external type Url for commonjs reference` will be displayed
