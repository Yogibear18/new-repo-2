# Orto Santa Monica Website

This is a clone of the Orto Santa Monica restaurant website with full admin functionality.

## Features

- Responsive design for all devices
- Menu management system
- Reservation system
- Event booking
- Admin panel for content management
- SEO tools

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd orto-clone
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create `.env.local` file in the root directory with your credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Build for production:
```bash
npm run build
# or
yarn build
```

### Deployment

This project can be deployed on Vercel, Render, or any other platform supporting Next.js:

1. Connect your GitHub repository to Vercel or Render
2. Set up environment variables in the dashboard
3. Deploy

## Admin Access

Admin panel can be accessed at `/admin` with the following credentials:
- Email: admin@ortosantamonica.com
- Password: orto2023

## License

This project is licensed under the MIT License.
