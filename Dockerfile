FROM node:26.13.1-trixie AS dev

WORKDIR /src
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.30.7-alpine AS prod
COPY --from=dev /src/dist /usr/share/nginx/html
EXPOSE 80
