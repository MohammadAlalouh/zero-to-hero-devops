# 1. Start with a lightweight version of Node
FROM node:18-alpine

# 2. Create a working directory
WORKDIR /app

# 3. Copy package.json (and package-lock.json if it exists)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the app
COPY . .

# 6. Expose the port Express runs on
EXPOSE 3000

# 7. The command to start the server
CMD ["node", "index.js"]