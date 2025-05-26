# Use the official nginx image as our base
# This is like starting with a pre-configured web server
FROM nginx:alpine

# Set metadata about our image
LABEL maintainer="your-email@example.com"
LABEL description="A Docker learning project - portfolio web application"
LABEL version="1.0"

# Copy our web application files to the nginx html directory
# This is where nginx looks for files to serve
COPY src/ /usr/share/nginx/html/

# Copy a custom nginx configuration if needed (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to allow external access
# This doesn't actually publish the port - it's documentation
EXPOSE 80

# The base nginx image already has a CMD instruction to start nginx
# So we don't need to specify one here

# Add a health check to monitor container status
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1