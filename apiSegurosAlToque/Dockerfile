# Imagen solo para la API (Node + TypeScript). El front Angular va en Netlify u otro host.
# En Railway: Source → Root Directory = apiSegurosAlToque (repositorio monorepo).
# syntax=docker/dockerfile:1
FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
RUN chown -R node:node /app
EXPOSE 3000
USER node
CMD ["node", "dist/server.js"]
