# Specify base image
FROM node:alpine

# Add dependencies
COPY './package.json' './'
RUN npm install
COPY './' './'

# Create command
CMD ["npm", "start"]