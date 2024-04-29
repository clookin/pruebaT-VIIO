FROM node:16 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Fase de ejecución
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]