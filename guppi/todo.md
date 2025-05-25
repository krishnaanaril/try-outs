# Project To-Do Checklist

## Step A: Project Setup
- [ ] Create a new React app (e.g., via create-react-app).
- [ ] Install Shadcn UI components.
- [ ] Configure ESLint and Prettier.
- [ ] Initialize a Git repository.

## Step B: Basic QR Scan & Log
- [ ] Install a QR scanning library (e.g., react-qr-reader).
- [ ] Create a “Scan & Enter” page to capture merchant info from QR codes.
- [ ] Add form fields for amount and notes, then console.log on submit.

## Step C: DB Integration
- [ ] Install and configure an SQLite or Dexie-based local DB.
- [ ] Create a “transactions” table to store scanned data.
- [ ] Display a list of all transactions on the Home page.

## Step D: Category/Transaction UI
- [ ] Design a table structure for categories and sub-categories.
- [ ] Build a UI to add/edit categories (CRUD).
- [ ] Include category selection when logging transactions.

## Step E: Initial Insights
- [ ] Install a chart library (e.g., Chart.js).
- [ ] Display monthly total spending and category-based stats.
- [ ] Present a bar or pie chart summarizing transaction data.

## Step F: Backup & Restore
- [ ] Integrate Google OAuth for authentication.
- [ ] Implement backup to Google Sheets (push transactions).
- [ ] Implement restore logic from Google Sheets (pull transactions).

## Step G: Offline Support
- [ ] Enable service workers (CRA or custom config).
- [ ] Queue Google Sheets backups when offline.
- [ ] Automatically retry queued backups when reconnected.

## Step H: Error Handling & Testing
- [ ] Show user-friendly messages for QR scanning failures.
- [ ] Handle GPS permission or connectivity issues.
- [ ] Create unit tests for scanning, DB access, and error scenarios.

## Step I: Final Integration & Deployment
- [ ] Combine all pages (Home, Scan & Enter, History, Settings).
- [ ] Ensure cross-browser compatibility.
- [ ] Deploy to GitHub Pages, Netlify, or another host.