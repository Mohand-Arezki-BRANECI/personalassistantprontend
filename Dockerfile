# Use an official Node.js 18 runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the React app
RUN npm run build

# Set the environment variable for production
ENV NODE_ENV=production

# Expose the desired port (change 3000 to your application's port if necessary)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
