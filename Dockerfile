# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

ARG NEXT_PUBLIC_BLOG_API_URL=https://api.buzingbee.com/api/blog
ARG BLOG_API_URL=https://api.buzingbee.com/api/blog
ARG SITE_URL=https://buzingbee.com

ENV NEXT_PUBLIC_BLOG_API_URL=$NEXT_PUBLIC_BLOG_API_URL
ENV BLOG_API_URL=$BLOG_API_URL
ENV SITE_URL=$SITE_URL

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Runtime stage
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

ARG NEXT_PUBLIC_BLOG_API_URL=https://api.buzingbee.com/api/blog
ARG BLOG_API_URL=https://api.buzingbee.com/api/blog
ARG SITE_URL=https://buzingbee.com

ENV NEXT_PUBLIC_BLOG_API_URL=$NEXT_PUBLIC_BLOG_API_URL
ENV BLOG_API_URL=$BLOG_API_URL
ENV SITE_URL=$SITE_URL

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.env.production ./.env.production

EXPOSE 3000

CMD ["node", "server.js"]
