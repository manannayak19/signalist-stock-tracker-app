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

**Core:**
![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Backend & Database:**
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Inngest](https://img.shields.io/badge/Inngest-333333?style=for-the-badge&logo=inngest&logoColor=white)

**APIs & Services:**
* **Finnhub:** Financial Data API
* **Gemini AI:** Generative AI for summaries
* **TradingView:** Charting Widgets
* **Nodemailer:** Email Service

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
