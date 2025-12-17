# Seashell Travel Website

## Overview

Seashell Travel is a modern, responsive website for an IATA-accredited travel agency based in Seychelles. The platform serves both leisure and corporate travelers, offering flight bookings, visa processing, hotel reservations, and travel consulting services. Built as a full-stack application with a React frontend and Express backend, the site features a contact form with email functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: React Router DOM for client-side navigation with multiple pages (Home, About, Services, Awards, Contact, FAQ, etc.)
- **Styling**: Tailwind CSS with custom ocean-themed color palette and CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack React Query for server state, React useState for local state
- **Typography**: Inter (sans-serif) and Playfair Display (serif) fonts from Google Fonts

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript executed via tsx
- **API Design**: RESTful endpoint at `/api/contact` for form submissions
- **Validation**: Zod schema validation for request data
- **Email Service**: Nodemailer with Office365 SMTP configuration
- **Production Mode**: Serves static frontend files when `NODE_ENV=production`

### Development Setup
- **Concurrent Development**: Uses `concurrently` to run frontend (port 5000) and backend (port 3001) simultaneously
- **Proxy Configuration**: Vite proxies `/api` requests to backend server
- **Hot Reload**: Vite HMR for frontend, tsx for backend

### Project Structure
```
├── src/                    # Frontend React application
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   └── home/          # Homepage-specific components
│   ├── pages/             # Route page components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── assets/            # Static assets (images)
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   └── email.ts          # Email service module
└── public/               # Static public files
```

## External Dependencies

### Email Service
- **Provider**: Microsoft Office365 SMTP (smtp.office365.com)
- **Port**: 587 with TLS
- **Environment Variables Required**:
  - `MAIL_HOST` (optional, defaults to smtp.office365.com)
  - `MAIL_PORT` (optional, defaults to 587)
  - `MAIL_USERNAME` (optional, defaults to formmail@switch.sc)
  - `MAIL_PASSWORD` (required for email functionality)

### Third-Party Services
- **Google Fonts**: Inter and Playfair Display fonts loaded via CDN
- **Unsplash**: External images used for hero backgrounds and placeholder content

### Key NPM Dependencies
- **UI**: Radix UI primitives, Lucide React icons, Embla Carousel
- **Forms**: React Hook Form with Zod resolvers
- **Utilities**: clsx, tailwind-merge, date-fns, class-variance-authority
- **Backend**: Express, Nodemailer, CORS, Zod