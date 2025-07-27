# Deployment Guide for Orto Santa Monica Website

This guide provides instructions for deploying the Orto Santa Monica website on various platforms.

## Prerequisites

- A GitHub account
- An account on Vercel, Netlify, or Render
- (Optional) Supabase account for authentication and database
- (Optional) Sanity.io account for content management

## Option 1: Deploy to Vercel (Recommended)

1. Fork or push this repository to your GitHub account
2. Sign up or log in to [Vercel](https://vercel.com)
3. Click "New Project" and import your GitHub repository
4. Configure the following environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL` (if using Supabase)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (if using Supabase)
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` (if using Sanity)
   - `NEXT_PUBLIC_SANITY_DATASET` (if using Sanity)
5. Click "Deploy"

Vercel will automatically build and deploy your website. Once deployed, you'll receive a URL where your site is accessible.

## Option 2: Deploy to Netlify

1. Fork or push this repository to your GitHub account
2. Sign up or log in to [Netlify](https://netlify.com)
3. Click "New site from Git" and select your GitHub repository
4. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add the environment variables mentioned above
6. Click "Deploy site"

## Option 3: Deploy to Render

1. Fork or push this repository to your GitHub account
2. Sign up or log in to [Render](https://render.com)
3. Click "New" and select "Web Service"
4. Connect your GitHub repository
5. Configure the service:
   - Name: `orto-santa-monica`
   - Environment: `Node`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
6. Add the environment variables mentioned above
7. Click "Create Web Service"

## Using the Website Without Supabase or Sanity

If you don't want to set up Supabase or Sanity, the website includes fallback functionality:

1. Admin authentication will use a mock system with the demo credentials
2. Content will be served from the built-in mock data

However, for a production site, it's recommended to set up proper backend services.

## Custom Domain Setup

After deploying, you can configure a custom domain:

1. Purchase a domain (e.g., from Namecheap, GoDaddy, etc.)
2. In your deployment platform (Vercel, Netlify, or Render), navigate to the domain settings
3. Add your custom domain and follow the instructions to configure DNS settings

## Troubleshooting

If you encounter issues during deployment:

- Check the build logs for errors
- Verify that all environment variables are correctly set
- Ensure your repository includes all necessary files
- If using Supabase or Sanity, verify your API keys and access permissions

For additional help, refer to the documentation of your chosen hosting platform.
