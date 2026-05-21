# Deploy no Netlify

## Configuração

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22`

O projeto já inclui `netlify.toml`, `public/_redirects` e `public/_headers` para deploy no Netlify.

## Opção recomendada: Git

1. Suba este projeto para um repositório no GitHub.
2. No Netlify, clique em **Add new site** > **Import an existing project**.
3. Escolha o repositório.
4. Confirme:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Clique em **Deploy**.

## Opção rápida: drag-and-drop

1. Rode `npm install`.
2. Rode `npm run build`.
3. Envie a pasta `dist` para o deploy manual do Netlify.
