# Age Calculator

🌍 **Live Demo:** [https://age-calculator-ivory-gamma.vercel.app/](https://age-calculator-ivory-gamma.vercel.app/)

An advanced web application to calculate exact age, detailed breakdowns, next birthday countdowns, and discover fun historical facts about your birth year.

This project was built for the Advanced Web Technologies (AWT) course - Formative Assessment Phase I & II.

## Features
- **Accurate Age Calculation**: Calculates age in years, months, and days.
- **Detailed Breakdown**: See your age in total months, weeks, days, hours, and minutes.
- **Birthday Countdown**: Find out exactly how many days are left until your next birthday.
- **Historical Fun Facts**: Integrates with external APIs to fetch historical events that happened in your birth year.
- **Profile Management (CRUD)**: Save profiles of your friends and family with their birth dates to a local JSON server.
- **Search & Filter**: Search saved profiles by name, or filter them by Zodiac sign.
- **Responsive Design**: Modern, glassmorphism UI that works beautifully across all devices.
- **Dark/Light Theme**: Built-in theme toggling context.

## Tech Stack
- React.js (v19)
- React Router DOM for routing
- Vite (Build Tool)
- Vitest (Testing)
- JSON Server (Mock Backend API)

## Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/MAGARDILIP/age-calculator.git
   ```
2. Navigate into the project directory:
   ```bash
   cd age-calculator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To run both the Vite frontend and the JSON Server backend simultaneously:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Running Tests
To execute the component and utility tests using Vitest:
```bash
npm run test
```

## Deployment
This project is successfully deployed on **Vercel**. 
- **Live URL:** [https://age-calculator-ivory-gamma.vercel.app/](https://age-calculator-ivory-gamma.vercel.app/)
- A `vercel.json` is included to handle React Router client-side routing.
- *Note: Since Vercel uses a serverless environment, the `json-server` backend operates in read-only mode in production.*
