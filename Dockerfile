FROM golang:1.21.5-alpine AS builder

# Install node.js and npm
RUN apk add --no-cache 'nodejs~=20' npm brotli gzip git zopfli bash
RUN apk add --no-cache --repository=https://dl-cdn.alpinelinux.org/alpine/edge/community hugo

WORKDIR /app
COPY . .

RUN npm install
RUN node src/import.js -f hugo tech2022 -o tech2022/hugo

WORKDIR /app/tech2022/hugo

RUN hugo --minify

WORKDIR /app/tech2022/hugo/public

RUN chmod -v +x /app/build/compress_files.sh && /app/build/compress_files.sh /app/tech2022/hugo/public

# Create the nginx container

FROM dockerreg.zzt.net/nginx/static:master as final

# Copy the built files into the nginx container
COPY --from=builder /app/tech2022/hugo/public /html
