# 📈 Signalist - Intelligent Stock Tracker

![Signalist Banner](public/assets/images/dashboard-preview.png)
---
**Signalist** is a modern, real-time stock tracking application built with **Next.js 16**. It empowers users to stay ahead of the market with interactive visualizations, AI-curated news summaries, and robust watchlist management.

Built for investors who value speed and clarity, Signalist aggregates data from **Finnhub** and visualizes it using advanced **TradingView** widgets, all wrapped in a sleek, responsive interface.

---

## 🚀 Key Features

* **📊 Interactive Dashboard:** comprehensive market overview using TradingView widgets, including Real-time Heatmaps, Market Quotes, and Top Stories.
* **🤖 AI-Powered News:** Leverages **Google Gemini** via **Inngest** to generate concise, daily market news summaries delivered straight to your inbox.
* **🔍 Smart Search & Tracking:** Instantly search for stocks and add them to your personal watchlist for easy monitoring.
* **🔐 Secure Authentication:** Robust user management and authentication powered by **Better Auth**.
* **⚡ Real-Time Data:** Live market data integration using the Finnhub API.
* **📧 Automated Updates:** Scheduled email reports for sign-ups and daily market digests using **Nodemailer**.

---

## 🛠️ Tech Stack

## ⚙️ Tech Stack

### **Core Framework & UI**
- ![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white) **Next.js** – A powerful React framework for server-side rendering, static site generation, and API routes.
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) **TypeScript** – A statically typed superset of JavaScript that enhances code quality, tooling, and error detection.
- ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) **TailwindCSS** – A utility-first CSS framework for building custom, responsive designs directly in your HTML.
- ![Shadcn](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white) **Shadcn** – A library of fully customizable, accessible React components for building consistent and beautiful UIs.

### **Backend & Database**
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) **MongoDB** – A flexible, high-performance NoSQL database for storing data in JSON-like documents.
- ![Better Auth](https://img.shields.io/badge/Better_Auth-5C2D91?style=for-the-badge&logo=auth0&logoColor=white) **Better Auth** – A framework-agnostic library for handling email/password login, social sign-ons, and multi-factor authentication.
- ![Nodemailer](https://img.shields.io/badge/Nodemailer-007ACC?style=for-the-badge&logo=minutemailer&logoColor=white) **Nodemailer** – A reliable Node.js library for handling transactional emails and notifications.

### **Cloud, APIs & Tools**
- ![Inngest](https://img.shields.io/badge/Inngest-333333?style=for-the-badge&logo=inngest&logoColor=white) **Inngest** – A platform for building reliable, event-driven workflows and background jobs like real-time alerts.
- ![Finnhub](https://img.shields.io/badge/Finnhub-00C7B7?style=for-the-badge&logo=finnhub&logoColor=white) **Finnhub** – A real-time financial data API providing stock, forex, and crypto market data for trading apps.
- ![CodeRabbit](https://img.shields.io/badge/CodeRabbit-FF5722?style=for-the-badge&logo=rabbit&logoColor=white) **CodeRabbit** – An AI-powered code review assistant that helps catch bugs and enforce best practices via GitHub integration.

---

## ⚙️ Environment Variables

To run this project locally, you will need to add the following environment variables to your `.env.local` file:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication (Better Auth)
BETTER_AUTH_SECRET=your_generated_secret
BETTER_AUTH_URL=http://localhost:3000

# APIs
NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_key
FINNHUB_API_KEY=your_finnhub_key
GEMINI_API_KEY=your_google_gemini_key

# Email (Nodemailer)
NODEMAILER_EMAIL=your_email_address
NODEMAILER_PASSWORD=your_app_specific_password
```
---

## 🏃‍♂️ Getting Started
**Clone the repository:**

```
git clone [https://github.com/manannayak19/signalist-stock-tracker-app.git](https://github.com/manannayak19/signalist-stock-tracker-app.git)
```

**Install dependencies:**
```
npm install
```

**Run the development server:**
```
npm run dev
```
**Open the app: Visit localhost:3000 to view the application locally.**

<p align="center"> Built with little bit of ❤️ by <a href="https://www.google.com/search?q=https://github.com/manannayak19">Me</a> </p>
