# frontend/Dockerfile

# Etapa 1: Construcción de la aplicación
FROM node:20-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
# Comando para construir la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación construida usando un servidor ligero (nginx)
FROM nginx:stable-alpine
# Copia los artefactos de construcción de la etapa anterior
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
# Expone el puerto estándar para HTTP
EXPOSE 80
# Cuando el contenedor inicie, nginx se iniciará automáticamente
CMD ["nginx", "-g", "daemon off;"]