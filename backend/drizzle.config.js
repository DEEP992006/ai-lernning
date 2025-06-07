
import { defineConfig } from 'drizzle-kit';

// Drizzle-Kit Configuration
export default defineConfig({
  out: './drizzle', 
  schema: './schema/index.js', // Path to database schema
  dialect: 'postgresql', 
  dbCredentials: {
    url: process.env.DATABASE_URL, // Database connection URL
  },
});