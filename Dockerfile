FROM golang:1.23.0-alpine AS builder

# Install node.js and npm
RUN apk add --no-cache 'nodejs~=20' npm brotli gzip git zopfli bash gcc g++ musl-dev libc-dev
# RUN apk add --no-cache --repository=https://dl-cdn.alpinelinux.org/alpine/edge/community hugo
RUN CGO_ENABLED=1 go install -tags extended github.com/gohugoio/hugo@v0.133.1

WORKDIR /app
COPY . .

RUN npm install
RUN node src/import.js -f hugo tech2022 -o tech2022/hugo

WORKDIR /app/tech2022/hugo


RUN hugo --minify --baseURL https://hambook.org

WORKDIR /app/tech2022/hugo/public

RUN chmod -v +x /app/build/compress_files.sh && /app/build/compress_files.sh /app/tech2022/hugo/public

# Create the nginx container

FROM dockerreg.zzt.net/nginx/static:master as final

# Copy the built files into the nginx container
COPY --from=builder /app/tech2022/hugo/public /html
