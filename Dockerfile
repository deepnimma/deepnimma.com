# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React app
RUN npm run build

# Install "serve" globally
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Command to serve the build folder
CMD ["serve", "-s", "build", "-l", "3000"]

