# Use a newer Ruby image for Chirpy v7 compatibility
FROM ruby:3.3-slim

# Install dependencies for Jekyll and common gems
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    libxml2-dev \
    libxslt1-dev \
    zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/jekyll

# Copy Gemfile and Gemfile.lock (if it exists)
COPY Gemfile* ./

# Install gems globally in the image
RUN gem install bundler:2.5.6 && bundle install

# Copy the rest of the application
COPY . .

# Expose port for Jekyll
EXPOSE 4000

# Default command to serve the blog
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4000", "--force_polling", "--livereload"]
