# FROM node:latest
# WORKDIR /app
# COPY package.json /app

# RUN npm install
# COPY . .
# RUN npm run build
# CMD ["npm", "start"]

# Use a more specific node version to ensure consistency
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and package-lock.json first, to leverage Docker layer caching for dependencies
COPY package.json package-lock.json /app/

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
