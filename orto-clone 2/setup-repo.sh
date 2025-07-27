#!/bin/bash

# This script helps you set up a GitHub repository for your Orto Santa Monica website
# and prepares it for deployment on Vercel, Render, or Netlify

echo "Setting up GitHub repository for Orto Santa Monica website..."

# Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
  git init
  echo "Git repository initialized."
fi

# Create .gitignore file
cat > .gitignore << 'EOG'
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
EOG

echo ".gitignore created."

# Add all files to git
git add .

# Create initial commit
git commit -m "Initial commit of Orto Santa Monica website"

echo ""
echo "Repository prepared! Follow these steps to deploy:"
echo ""
echo "1. Create a new repository on GitHub"
echo "2. Run these commands to push to your repository:"
echo "   git remote add origin YOUR_GITHUB_REPO_URL"
echo "   git push -u origin main"
echo ""
echo "3. Connect your GitHub repository to Vercel, Netlify, or Render"
echo "4. Set the required environment variables in your hosting platform:"
echo "   - NEXT_PUBLIC_SUPABASE_URL"
echo "   - NEXT_PUBLIC_SUPABASE_ANON_KEY"
echo "   - NEXT_PUBLIC_SANITY_PROJECT_ID"
echo "   - NEXT_PUBLIC_SANITY_DATASET"
echo ""
echo "Your Orto Santa Monica website is now ready for deployment!"
