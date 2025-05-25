# App Specification: UPI QR Code Expense Tracker

## Overview
The app is a simple, local-first UPI QR code expense tracker that allows users to scan QR codes, log transactions, track expenses, and gain insights into their spending patterns. It focuses on privacy, offline functionality, and ease of use.

---

## Key Features
1. **QR Code Scanning**:  
   - Scan UPI QR codes to extract payee details (e.g., name, UPI ID).  
   - Allow users to manually enter the payment amount and optional notes.  

2. **Expense Tracking**:  
   - Log transactions with details like amount, merchant, date/time, category, sub-category (optional), and location (via GPS).  
   - Enable users to manage categories and sub-categories (predefined + custom).  

3. **Insights**:  
   - Provide spending insights, including:  
     - Monthly & weekly spending totals by category.  
     - Trends over time.  
     - Budget tracking against set monthly limits.  
     - Merchant-wise spending summaries.  

4. **Data Handling**:  
   - Local-first approach using SQLite for browser-based storage.  
   - Automatic backups to Google Sheets (requires Google authentication).  
   - Automatic restore from Google Sheets if local data is unavailable.  

5. **Permissions**:  
   - Camera access for QR code scanning.  
   - GPS access for location tracking (optional, with a toggle to disable).  

6. **User Interface**:  
   - **Home Page**: Summary of transactions and key insights.  
   - **Scan & Enter Page**: QR code scanning and manual transaction entry.  
   - **Transaction History Page**: List of past transactions with filtering and search.  
   - **Settings Page**: Manage categories, budgets, GPS toggle, and Google Sheets backup.  

7. **Offline Functionality**:  
   - Full offline support for scanning, logging, and viewing transactions.  
   - Queue Google Sheets backups for syncing when the connection is restored.  

8. **Error Handling**:  
   - Clear error messages for:  
     - Failed QR code scans or invalid UPI QR codes.  
     - GPS or Google Sheets backup failures.  

---

## Architecture Choices
1. **Frontend Framework**:  
   - **ReactJS** with **Shadcn** for UI components.  

2. **Local Storage**:  
   - **SQLite** for browser-based storage (using libraries like `sql.js` or `Dexie.js`).  

3. **Data Backup**:  
   - Google Sheets integration using Google APIs for authentication and data sync.  

4. **Charts**:  
   - Simple charting library like **Chart.js** for visualizations.  

5. **Offline Support**:  
   - Service Workers for offline capabilities.  
   - IndexedDB for queuing Google Sheets backups.  

---

## Data Handling
1. **Data Model**:  
   - **Transaction**:  
     - `id`: Unique identifier.  
     - `amount`: Transaction amount.  
     - `merchant`: Payee name/UPI ID.  
     - `date_time`: Timestamp of the transaction.  
     - `category`: User-defined or predefined category.  
     - `sub_category`: Optional sub-category.  
     - `location`: GPS coordinates (optional).  
     - `notes`: Optional user notes.  

   - **Category**:  
     - `id`: Unique identifier.  
     - `name`: Category name.  
     - `sub_categories`: List of sub-categories.  

2. **Backup Format**:  
   - Data will be stored in Google Sheets in a tabular format with columns for each field (e.g., amount, merchant, date/time, etc.).  

3. **Restore Logic**:  
   - On app launch, check for local data.  
   - If unavailable, fetch the latest backup from Google Sheets.  

---

## Error Handling Strategies
1. **QR Code Scanning**:  
   - Display an error message if the QR code is invalid or cannot be scanned.  

2. **GPS Issues**:  
   - Notify the user if location tracking fails and suggest enabling GPS or checking permissions.  

3. **Google Sheets Backup**:  
   - Retry backup on failure.  
   - Notify the user if reauthentication is required.  

4. **General Errors**:  
   - Provide user-friendly error messages for unexpected issues.  

---

## Testing Plan
1. **Unit Testing**:  
   - Test individual components and functions (e.g., QR code parsing, SQLite queries).  

2. **Integration Testing**:  
   - Test interactions between components (e.g., QR code scanning + transaction logging).  

3. **End-to-End Testing**:  
   - Simulate user workflows (e.g., scanning a QR code, logging a transaction, viewing insights).  

4. **Offline Testing**:  
   - Verify functionality without an internet connection (e.g., logging transactions, queuing backups).  

5. **Permission Testing**:  
   - Test scenarios where permissions are denied or revoked (e.g., camera, GPS).  

6. **Backup & Restore Testing**:  
   - Test automatic backups to Google Sheets and restoration of data.  

7. **Cross-Browser Testing**:  
   - Ensure compatibility with major browsers (e.g., Chrome, Firefox, Edge).  

---

## Development Milestones
1. **Phase 1: Core Features**  
   - QR code scanning and transaction logging.  
   - Local storage using SQLite.  

2. **Phase 2: Insights & Visualization**  
   - Implement charts for spending insights.  
   - Add budget tracking.  

3. **Phase 3: Backup & Restore**  
   - Integrate Google Sheets for backup and restore.  

4. **Phase 4: Offline Support**  
   - Add service workers and offline functionality.  

5. **Phase 5: Error Handling & Testing**  
   - Implement error handling strategies.  
   - Conduct thorough testing.  

---

This specification provides a clear roadmap for development. Let me know if you’d like to refine or expand any section!
