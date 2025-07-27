import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
};

// Create a Sanity client
export const sanityClient = createClient(config);

// Helper function for generating image URLs
export const urlFor = (source) => imageUrlBuilder(sanityClient).image(source);
