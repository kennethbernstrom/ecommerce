# Nike E-commerce Store

A modern e-commerce application built with Next.js, TypeScript, TailwindCSS, Better Auth, Neon PostgreSQL, Drizzle ORM, and Zustand.

## Features

- 🛍️ Product catalog with Nike items
- 🎨 Modern UI with TailwindCSS
- 🔐 Authentication with Better Auth
- 🗄️ PostgreSQL database with Neon
- 🔄 Type-safe database operations with Drizzle ORM
- 🏪 State management with Zustand
- 📱 Responsive design

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Database**: Neon PostgreSQL
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth
- **State Management**: Zustand
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Neon PostgreSQL database

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   
   Copy `.env.local` and update with your values:
   ```bash
   # Database
   DATABASE_URL="your_neon_database_url_here"
   
   # Better Auth
   BETTER_AUTH_SECRET="your_auth_secret_here"
   BETTER_AUTH_URL="http://localhost:3000"
   
   # Next.js
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Database Setup**
   
   Generate and push the database schema:
   ```bash
   npm run db:push
   ```
   
   Seed the database with Nike products:
   ```bash
   npm run db:seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the application.

## Database Scripts

- `npm run db:generate` - Generate migration files
- `npm run db:migrate` - Run migrations
- `npm run db:push` - Push schema changes to database
- `npm run db:seed` - Seed database with sample Nike products

## Project Structure

```
src/
├── app/
│   ├── api/products/     # API routes
│   └── page.tsx          # Homepage
├── components/
│   └── ProductCard.tsx   # Product display component
├── lib/
│   └── db/
│       ├── index.ts      # Database connection
│       └── schema.ts     # Database schema
└── store/
    └── useProductStore.ts # Zustand store
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Submit a pull request

## License

MIT License