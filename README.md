# Vitória Lemos — Portfólio

Site estático (React + Vite + Tailwind).

## Publicar no GitHub Pages

Este projeto já vem com um workflow (`.github/workflows/deploy.yml`) que builda
e publica o site automaticamente a cada push na branch `main`. Você **não**
precisa gerar build manualmente nem manter uma pasta `/docs`.

Passo único, depois de subir este projeto pro GitHub:

1. No repositório: **Settings → Pages**
2. Em **"Build and deployment" → Source**, escolha **"GitHub Actions"**
   (não "Deploy from a branch")
3. Pronto. Dá um push na `main` e, em ~1 minuto, o site sobe em
   `https://<seu-usuario>.github.io/<nome-do-repo>/`

Pra acompanhar o progresso do build: aba **Actions** do repositório.

## Rodar localmente

```bash
pnpm install
pnpm dev        # ambiente de desenvolvimento, http://localhost:3000
pnpm build:pages   # gera a versão estática de produção em /dist
pnpm preview    # serve a pasta /dist localmente pra conferir antes de publicar
```

## Trocar imagens de projeto (hoje são placeholders)

As 5 imagens dos projetos (Guacca, Smoosh, Pati Por Elas, Hubuddha, Maria
Severina) estão temporariamente usando placeholders neutros. Pra trocar:

1. Coloque a foto em `client/src/assets/images/`
2. No topo de `client/src/pages/Home.tsx`, importe:
   `import guaccaImg from "@/assets/images/guacca.webp";`
3. No array `projects`, troque o campo `img: "https://picsum.photos/..."`
   pela variável importada (`img: guaccaImg`)
