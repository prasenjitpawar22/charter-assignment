## Problem Statement

A retailer offers a rewards program to its customers, awarding points based on each recorded purchase:

- **2 points** for every dollar spent over $100 in each transaction
- **1 point** for every dollar spent between $50 and $100 in each transaction
- **0 points** for purchases $50 or less

**Example:** A $120 purchase earns 2×$20 + 1×$50 = **90 points**

Given a record of transactions during a three-month period, the application calculates the reward points earned for each customer per month and in total.

## Features

- ✅ Built with **React JS** (no TypeScript)
- ✅ Simulates asynchronous API calls to fetch transaction data
- ✅ No Redux—uses React hooks (`useState`, `useEffect`, `useMemo`) for state management
- ✅ Mock dataset demonstrating diverse customer transactions
- ✅ Three-month transaction analysis
- ✅ Displays:
  - Individual transaction reward points
  - Monthly reward points per customer
  - Total reward points per customer

## Project Structure

```
src/
├── components/
│   ├── customers-monthly-reward-points.jsx    # Monthly breakdown by customer
│   ├── customers-total-reward-points.jsx       # Total rewards summary
│   └── customers-total-transactions.jsx        # Individual transaction details
├── db/
│   └── index.js                               # Mock transaction dataset
├── utils/
│   └── functions.js                           # Reward calculation logic
├── App.jsx                                    # Main application component
├── App.css                                    # Application styles
├── main.jsx                                   # React entry point
└── index.css                                  # Global styles
```

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **pnpm** (or npm/yarn if preferred)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd carter-assignment
```

2. Install dependencies:
```bash
pnpm install
```

### Running the Application

Start the development server:
```bash
pnpm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Building for Production

Create an optimized production build:
```bash
pnpm run build
```

Preview the production build:
```bash
pnpm run preview
```

## Implementation Details

### Reward Points Calculation

The `getRewardPoints()` function in `src/utils/functions.js` implements the reward logic:

```javascript
export function getRewardPoints(sales) {
  let points = 0;
  if (sales > 50 && sales <= 100) {
    points = sales - 50;
  } else if (sales > 100) {
    points = 50 + (sales - 100) * 2;
  }
  return points;
}
```

### Mock Data & API Simulation

The application simulates an asynchronous API call using a Promise with a 500ms delay. The mock transaction data includes:

- **6+ customer transactions** spanning three months
- **Varied sales amounts** ($16 to $120+) to demonstrate different reward tiers
- **Complete transaction details** including customer info, product details, and order dates

### State Management

The application uses React hooks to manage state without Redux:

- **`useState`**: Manages data loading state
- **`useEffect`**: Handles the simulated API call
- **`useMemo`**: Optimizes calculations for:
  - Total reward points per customer
  - Reward points per transaction
  - Monthly reward points breakdown

## Component Overview

### CustomersTotalTransactions
Displays all individual transactions with their calculated reward points.

### CustomersMothlyRewardPoints
Shows a breakdown of reward points earned by each customer for each month.

### CustomersTotalRewardPoints
Displays the cumulative reward points earned by each customer across the three-month period.

## Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **JavaScript (ES6+)** - Language
- **CSS** - Styling

## Development

### Linting

Run ESLint to check code quality:
```bash
pnpm run lint
```
