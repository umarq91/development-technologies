# Set the base image to a specific version of Node.js
FROM node:20-alpine

# Create a non-root user and group
RUN addgroup -S app && adduser -S -G app app

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Change ownership of the working directory
RUN chown -R app:app /app

# Switch to the non-root user
USER app

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY --chown=app:app . .

# Expose the port the app runs on
EXPOSE 5173

# Start the app
CMD ["npm", "run", "dev"]
