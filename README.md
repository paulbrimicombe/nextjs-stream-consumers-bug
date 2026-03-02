# Bug reproduction for `stream/consumers` import issues

## Bug 1: `import 'stream/consumers'` does not work in ESM:

- `npm install`
- `npm run build` — error `Module not found: Can't resolve 'stream/consumers'` is displayed
- `npm run build -- --webpack` — build runs without errors
- Updating [`page.tsx`](./app/page.tsx) to add a `node:` prefix to the `stream/consumers` import is temporary a workaround

## Bug 2: both `stream/consumers` and `node:stream/consumers` do not work in CommonJS dependencies

- Update [`page.tsx`](./app/page.tsx) to add a `node:` prefix to the `stream/consumers` import
- `npm install`
- `npm run build` — error `Error: Cannot find module 'node:stream/consumers': Unsupported external type Url for commonjs referenc` is displayed
- `npm run build -- --webpack` — build runs without errors
- No workaround available
