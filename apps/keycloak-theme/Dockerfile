# Use a Maven image with Java 17 as the base
FROM ubuntu:20.04

# Set environment variables
ENV NODE_VERSION=18

# Install Node.js (which includes npm) and Yarn
RUN apt-get update && \
    apt-get install -y curl && \
    # Install Node.js
    curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash - && \
    apt-get install -y nodejs && \
    # Install Yarn
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -y yarn && \
    # Clean up
    rm -rf /var/lib/apt/lists/*

RUN apt update && apt install maven -y && mvn --version

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy your project files (if you're adding a project)
# COPY . .

# Default command (optional, can be overridden in docker-compose or during container run)
CMD ["mvn", "--version"]  # or ["yarn", "--version"] or ["node", "--version"]
