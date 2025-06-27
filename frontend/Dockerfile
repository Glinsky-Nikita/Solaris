# Этап сборки
FROM node:16-alpine AS build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev && \
    npm cache clean --force
COPY . .
RUN npm run build

# Финальный образ
FROM node:16-alpine

WORKDIR /app
COPY --from=build-stage /app/build ./
COPY --from=build-stage /app/node_modules ./node_modules

# Установка serve (альтернатива npx)
RUN npm install -g serve@14.2.0

EXPOSE 3000
CMD ["serve", "-s", ".", "-l", "3000"]