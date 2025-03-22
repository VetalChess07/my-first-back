# Базовый образ Node.js
FROM node:20.17.0-alpine

# Создаём рабочую директорию внутри контейнера
WORKDIR /backend

# Копируем package.json и package-lock.json
COPY backend/package*.json ./

# Устанавливаем все зависимости, включая devDependencies (если ты используешь devDependencies)
RUN npm install

# Копируем tsconfig.json и исходный код
COPY backend/tsconfig.json ./
COPY backend/src ./src

# Устанавливаем TypeScript (если его нет в package.json)
RUN npm install typescript --save-dev

# Компилируем TypeScript в JavaScript
RUN npx tsc

# Открываем порт
EXPOSE 3000

# Запускаем сервер (берём JS-файл после компиляции)
CMD ["node", "build/main.js"]
