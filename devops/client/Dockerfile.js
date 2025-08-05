# Step 1: Use an official Node.js runtime as a parent image
FROM node:14-alpine as build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
COPY yarn.lock ./

# Step 4: Install dependencies
RUN npm install --silent

# Step 5: Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Step 6: Build the React application for production
RUN npm run build

# Step 7: Use the Nginx image to serve the React application
FROM nginx:alpine

# Step 8: Copy the build output from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 to the outside once the container has launched
EXPOSE 80

# Step 10: Define the command to run your app using CMD which defines your runtime
CMD ["nginx", "-g", "daemon off;"]
docker build -t react-app .
docker run -p 80:80 react-app
{
  "checklist": [
    {
      "step": "Create Dockerfile",
      "description": "Write a Dockerfile to define the steps to containerize the React app."
    },
    {
      "step": "Build Docker Image",
      "description": "Use the docker build command to create an image from the Dockerfile."
    },
    {
      "step": "Run Docker Container",
      "description": "Use the docker run command to start a container from the image."
    },
    {
      "step": "Access Application",
      "description": "Open a web browser and navigate to http://localhost to view the app."
    }
  ]
}