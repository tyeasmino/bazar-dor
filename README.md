# 🛒 বাজার দর (BazarDor)

**বাজার দর (BazarDor)** is a Bangla-based web application that helps users explore daily prices of essential products and understand price changes over time. The platform provides a simple and user-friendly interface to browse products by category, compare prices, and stay informed about market trends.

## ✨ Key Features

- **📊 Daily Product Prices:** View today's prices of essential products along with previous price information and price changes.
- **📂 Category-Based Browsing:** Explore products by category with relevant icons and product details.
- **↕️ Product Sorting:** Sort products by price (low to high, high to low) or alphabetically by name.
- **🔐 User Authentication:** Register and sign in using email and password, or authenticate with Google and GitHub through Better Auth.
- **🔔 Toast Notifications:** Receive feedback for authentication actions, validation errors, and other important events.

## 🛠️ Technologies Used

- **Next.js** — React framework for building the application.
- **React** — Component-based user interface.
- **TypeScript** — Type safety and improved developer experience.
- **Tailwind CSS** — Responsive styling and UI design.
- **Better Auth** — Authentication with email/password and social providers.
- **React Hot Toast** — Toast notifications for success and error messages.
- **BazarDor Products API** — Fetching product information and market prices.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd YOUR_PROJECT_DIRECTORY
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure the environment variables in a `.env.local` file according to your Better Auth and OAuth provider configuration.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open http://localhost:3000 in your browser.

## 🔑 Authentication

BazarDor uses Better Auth to support:

- Email and password registration
- Email and password sign-in
- Google authentication
- GitHub authentication
- User-friendly authentication feedback

Google and GitHub authentication require valid OAuth credentials and the appropriate callback URL configuration.

## 🌐 Product Data

Product information is fetched from the BazarDor Products API:

`https://openapi.programming-hero.com/api/bazardor/products`

Category-specific products can be retrieved using the category query parameter.

## 📱 Responsive Design

The interface is designed to provide a consistent browsing experience across mobile, tablet, and desktop devices.

## 🎯 Project Goal

The goal of BazarDor is to make essential market price information easier to access and understand through a simple, accessible, and Bangla-friendly digital platform.

---

**Built with ❤️ for a smarter shopping experience.**
