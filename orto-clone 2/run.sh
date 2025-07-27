#!/bin/bash

echo "Running Orto Santa Monica website locally..."
echo ""
echo "This script will install dependencies and start the development server."
echo "Make sure you have Node.js v16+ installed."
echo ""

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install --legacy-peer-deps
else
  echo "Dependencies already installed."
fi

# Check if .env.local exists, if not create it from example
if [ ! -f ".env.local" ]; then
  if [ -f ".env.local.example" ]; then
    echo "Creating .env.local from example..."
    cp .env.local.example .env.local
    echo "Created .env.local. Please update with your own values if needed."
  else
    echo "Warning: No .env.local or .env.local.example found."
    echo "Creating a basic .env.local file..."
    cat > .env.local << 'EOENV'
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
EOENV
    echo "Created basic .env.local file. Update with your values if needed."
  fi
fi

# Start development server
echo ""
echo "Starting development server..."
npm run dev
