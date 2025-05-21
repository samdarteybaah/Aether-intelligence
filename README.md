# Aether-intelligence
 
A sophisticated e-commerce analytics platform built with Remix, TypeScript, and Shopify integration. 
The platform leverages TensorFlow.js for advanced data processing capabilities and provides a seamless 
integration with Shopify's ecosystem.

# Context

This application is designed to provide intelligent analytics and insights for Shopify merchants, 
combining modern web technologies with AI capabilities to enhance business decision-making.

# Features

1. Modern e-commerce analytics dashboard
   - Real-time data insights
   - Viewable metrics 

2. AI-Powered Analytics
   - TensorFlow.js integration for advanced data processing
   - Machine learning capabilities
   - Prescriptive analytics

3. Shopify Integration
   - Secure authentication
   - Real-time data synchronization
   - Webhook support

4. Database Management
   - Prisma ORM for efficient data handling
   - Automated migrations
   - Secure session management

# Folders

- `/app` - Main application code
- `/build` - Compiled production code
- `/prisma` - Database schema and migrations
- `/public` - Static assets
- `/extensions` - Shopify extensions
- `/shopify` - Shopify configuration files

# Installation Requirements

Prerequisites
- Node.js (v18.20 or higher)
- npm or yarn
- Shopify Admin Store account
- PostgreSQL database

### To run locally:

1. Install dependencies:
npm install


2. Set up environment variables:
- Copy `.env.example` to `.env`
- Configure your Shopify API credentials

3. Initialize the database:
npm run setup


4. Start development server:
shopify run dev


### To run in production:

1. Build the application:
shopify run app

2. Start the server:
bash
npm start


GitHub Links - https://github.com/samdarteybaah/Aether-intelligence

Youtube Demo - https://youtu.be/rdZNLBQwwZM


Additional Information

- The application uses Remix framework for the frontend/backend architecture
- Prisma ORM for database management
- TensorFlow.js for AI capabilities
- Shopify's Polaris design system for UI components

