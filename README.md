# Zac Guide - React + Vite + TailwindCSS

Este é o projeto **Zac Guide**, um guia interativo para o campeão Zac em League of Legends, feito com React, Vite e TailwindCSS.

---

## Scripts disponíveis

| Comando        | Descrição                                                        |
| -------------- | ---------------------------------------------------------------- |
| `npm run dev`  | Inicia o servidor de desenvolvimento local (modo dev)           |
| `npm run build`| Gera a build otimizada para produção na pasta `dist`             |
| `npm run deploy` | Publica a build no GitHub Pages (envia a pasta `dist` para `gh-pages`) |
| `npm run explain` | Mostra uma explicação passo a passo dos comandos para deploy    |

---

## Publicando no GitHub Pages

O projeto está configurado para publicar automaticamente no GitHub Pages usando o pacote [`gh-pages`](https://www.npmjs.com/package/gh-pages).

### Fluxo para atualizar o site:

1. Faça suas alterações no código-fonte local.
2. Rode `npm run build` para criar a build de produção.
3. Rode `npm run deploy` para enviar a build para o GitHub Pages.
4. Acesse seu site em:  
   `https://eduardo-virissimo.github.io/zac-guide-data-dragon/`

---

## Dependências principais

- React 19.x
- Vite 7.x
- TailwindCSS 4.x
- framer-motion, react-icons, gsap e outras libs para animação e UI

---

## Como iniciar o projeto localmente

```bash
npm install
npm run dev
