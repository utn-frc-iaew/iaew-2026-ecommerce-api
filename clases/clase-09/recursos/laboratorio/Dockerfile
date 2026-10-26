FROM node:22.17.0-bookworm-slim
WORKDIR /app
COPY package.json ./
COPY src ./src
USER node
EXPOSE 8080
CMD ["node", "src/app.js"]
