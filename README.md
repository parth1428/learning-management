# Learning Management System

A modern, full-stack learning management system built with Next.js, TypeScript, and Node.js. This platform provides a comprehensive solution for online education with features for both teachers and students.

## 🚀 Features

### For Teachers
- **Course Management**: Create, edit, and organize courses with chapters and sections
- **Content Creation**: Add rich content including videos, documents, and interactive materials
- **Student Progress Tracking**: Monitor student engagement and completion rates
- **Billing Management**: Handle course payments and subscriptions
- **Profile Management**: Customize teacher profiles and settings

### For Students
- **Course Discovery**: Browse and search for available courses
- **Progress Tracking**: Track learning progress with visual indicators
- **Interactive Learning**: Access course content with a modern, responsive interface
- **Payment Processing**: Secure checkout and payment management
- **Profile Management**: Manage personal information and preferences

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui**: Modern UI components
- **Clerk**: Authentication and user management
- **Stripe**: Payment processing

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **TypeScript**: Type-safe backend development
- **DynamoDB**: NoSQL database
- **AWS SDK**: Cloud services integration

## 📁 Project Structure

```
Learn-master/
├── client/                 # Frontend Next.js application
│   ├── src/
│   │   ├── app/           # App Router pages
│   │   ├── components/    # Reusable UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   ├── state/         # State management
│   │   └── types/         # TypeScript type definitions
│   └── public/            # Static assets
└── server/                # Backend Node.js application
    ├── src/
    │   ├── controllers/   # Request handlers
    │   ├── models/        # Data models
    │   ├── routes/        # API routes
    │   ├── utils/         # Utility functions
    │   └── seed/          # Database seeding
    └── Dockerfile         # Container configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/learning-management.git
   cd learning-management
   ```

2. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Set up environment variables**
   
   Create `.env.local` in the `client` directory:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

   Create `.env` in the `server` directory:
   ```env
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_REGION=your_aws_region
   ```

5. **Run the development servers**

   Frontend (in `client` directory):
   ```bash
   npm run dev
   ```

   Backend (in `server` directory):
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Frontend: [http://localhost:3000](http://localhost:3000)
   Backend: [http://localhost:5000](http://localhost:5000)

## 📚 API Documentation

### Course Endpoints
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create a new course
- `GET /api/courses/:id` - Get course by ID
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course

### User Progress Endpoints
- `GET /api/progress/:userId` - Get user progress
- `POST /api/progress` - Update user progress
- `GET /api/progress/:userId/:courseId` - Get specific course progress

### Transaction Endpoints
- `GET /api/transactions` - Get all transactions
- `POST /api/transactions` - Create new transaction
- `GET /api/transactions/:id` - Get transaction by ID

## 🧪 Testing

```bash
# Frontend tests
cd client
npm run test

# Backend tests
cd server
npm run test
```

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

If you have any questions or need support, please open an issue on GitHub or contact the development team.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Clerk](https://clerk.com/) for authentication
- [Stripe](https://stripe.com/) for payment processing
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Shadcn/ui](https://ui.shadcn.com/) for UI components
