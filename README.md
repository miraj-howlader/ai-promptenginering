# Prompt Marketplace

A modern prompt-sharing platform where users can discover, save, create, and manage AI prompts. Built with Next.js, Express, MongoDB, and Better Auth for secure authentication and a seamless user experience.

## 🚀 Features

* User Authentication with Better Auth
* Secure Login & Registration
* Create, Edit, and Delete Prompts
* Browse Public Prompts
* Save Favorite Prompts
* User Dashboard
* Creator Dashboard
* Responsive Design
* Toast Notifications
* Modern UI with Tailwind CSS and Hero UI
* MongoDB Database Integration
* REST API with Express.js

## 🛠️ Tech Stack

### Frontend

* Next.js
* React.js
* Tailwind CSS
* Hero UI
* React Hot Toast
* React Icons
* Lucide React

### Backend

* Express.js
* MongoDB
* Better Auth

### Database

* MongoDB Atlas

## 📂 Project Structure

```bash
client/
├── app/
├── components/
├── hooks/
├── lib/
├── public/
└── styles/

server/
├── routes/
├── middleware/
├── config/
├── controllers/
└── index.js
```

## ⚙️ Environment Variables

### Client

```env
NEXT_PUBLIC_API_URL=your_backend_url
BETTER_AUTH_URL=your_frontend_url
```

### Server

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=your_frontend_url
```

## 📦 Installation

### Clone Repository

```bash
git clone https://github.com/your-username/prompt-marketplace.git
cd prompt-marketplace
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

## ▶️ Running Locally

### Start Backend

```bash
npm run dev
```

### Start Frontend

```bash
npm run dev
```

Frontend:

```bash
http://localhost:3000
```

Backend:

```bash
http://localhost:5000
```

## 🚀 Deployment

### Frontend

Deploy on Vercel.

### Backend

Deploy on Vercel, Render, Railway, or another Node.js hosting provider.

### Database

Use MongoDB Atlas for cloud database hosting.

## 🔐 Authentication

Authentication is powered by Better Auth and includes:

* Email & Password Login
* Session Management
* Protected Routes
* Secure Authentication Flow

## 📱 Responsive Design

The application is optimized for:

* Desktop
* Tablet
* Mobile Devices

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Developed by Miraj Howlader.
