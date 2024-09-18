# Use an official Node.js runtime as a parent image
FROM node:lts-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the frontend application
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose port 80 for the application
EXPOSE 80

# Command to serve the build output
CMD ["serve", "-s", "build", "-l", "80"]
