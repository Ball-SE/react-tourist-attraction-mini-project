# Tourist Attraction Search App

A React application for searching tourist attractions with Express.js backend.

## Features

- Search tourist attractions by keywords
- Category-based filtering
- Responsive design with Tailwind CSS
- Real-time search with debouncing

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Deployment**: Vercel

## Local Development

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Install dependencies for all projects:
```bash
npm run install:all
```

2. Start development servers:
```bash
npm run dev
```

This will start both frontend (port 5173) and backend (port 4001) servers.

### Manual Setup

If you prefer to run servers separately:

**Backend:**
```bash
cd server
npm install
npm start
```

**Frontend:**
```bash
cd client
npm install
npm run dev
```

## Deployment on Vercel

This project is configured for Vercel deployment with the following setup:

- Frontend: Static build from `client/dist`
- Backend: Serverless functions via `server/app.js`
- API routes: `/api/*` → server functions
- Static routes: `/*` → React app

### Deploy Steps

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the configuration and deploy

### Configuration Files

- `vercel.json`: Vercel deployment configuration
- `package.json`: Root package with build scripts
- `client/package.json`: Frontend dependencies
- `server/package.json`: Backend dependencies

## API Endpoints

- `GET /api/trips?keywords=<search_term>`: Search tourist attractions

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   └── App.jsx         # Main app component
│   └── package.json
├── server/                 # Express backend
│   ├── app.js             # Main server file
│   ├── db.js              # Data source
│   └── package.json
├── vercel.json            # Vercel configuration
└── package.json           # Root package configuration
```

## Environment Variables

No environment variables required for basic functionality.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request