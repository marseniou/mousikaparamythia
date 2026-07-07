FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
EXPOSE 3000
COPY --from=build /app/.output ./.output
CMD ["node", ".output/server/index.mjs"]
