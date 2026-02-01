# React Moderation Dashboard

[![GitHub Pages](https://img.shields.io/badge/demo-live-success?style=flat-square&logo=github)](https://luisyauri1.github.io/react-moderation-dashboard/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

A modern, beautiful content moderation dashboard built with React, TypeScript, and Tailwind CSS.

> 🚀 **[Live Demo](https://luisyauri1.github.io/react-moderation-dashboard/)**

## 🚀 Features

- ✅ **Authentication** - Login and registration with route guards
- ✅ **Post Management** - Full CRUD operations for posts
- ✅ **View/Edit Modes** - URL-based mode switching
- ✅ **Toast Notifications** - Beautiful feedback system
- ✅ **Protected Routes** - Secure authentication flow
- ✅ **Modern UI** - Premium design with glassmorphism

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **DummyJSON API** - Backend

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 GitHub Pages Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to **Pages** section
   - Under **Source**, select **GitHub Actions**

2. **Push to main branch**:

   ```bash
   git push origin main
   ```

3. **Access your site**:
   - Your site will be available at: `https://luisyauri1.github.io/react-moderation-dashboard/`

### Manual Deployment:

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# Deploy to gh-pages branch
npm run deploy
```

## 📁 Project Structure

```
src/
├── app/
│   └── router/          # Route configuration and guards
├── modules/
│   ├── auth/           # Authentication module
│   ├── posts/          # Posts management module
│   └── shell/          # App shell and layout
├── shared/
│   ├── ui/             # Reusable UI components
│   └── hooks/          # Custom React hooks
└── styles/             # Global styles
```

## 🔐 Authentication

Default credentials for testing:

- **Username**: `emilys`
- **Password**: `emilyspass`

## 🎨 UI Components

- `Button` - Primary and secondary variants
- `Input` - Form input with disabled states
- `Toast` - Notification system (info, success, warning, error)
- `GlassPanel` - Glassmorphism container
- `Divider` - Section separator

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Luis Yauri**

- GitHub: [@luisyauri1](https://github.com/luisyauri1)
- Repository: [react-moderation-dashboard](https://github.com/luisyauri1/react-moderation-dashboard)

---

Made with ❤️ using React, TypeScript, and Tailwind CSS
