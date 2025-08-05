# Use the official Node.js 16 image as a parent image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of your app's source code from your host to your container
COPY . .

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD ["node", "server.js"]
# Build the Docker image
docker build -t express-server .

# Run the Docker container
docker run -p 3000:3000 express-server
{
  "checklist": [
    {
      "step": "Create a Dockerfile",
      "description": "Define the environment and steps to build the Express server image."
    },
    {
      "step": "Build the Docker image",
      "description": "Use the docker build command to create an image from the Dockerfile."
    },
    {
      "step": "Run the Docker container",
      "description": "Start an instance of the Docker image as a container."
    },
    {
      "step": "Test the application",
      "description": "Verify that the Express server is accessible and functioning correctly."
    }
  ]
}