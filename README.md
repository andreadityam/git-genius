# Commit Message Generator 🤖✨

**Dari Git Diff menjadi Pesan Commit yang Sempurna, Seketika.**

## 1. Project Overview & Description

The **Commit Message Generator** is a modern web application designed to solve the problem of inconsistency and wasted time in writing Git commit messages. By leveraging advanced Artificial Intelligence (AI), this application automatically analyzes the raw `git diff` output you provide and generates **descriptive, concise, and standardized** commit messages (e.g., following the Conventional Commits format).

Our goal is to increase developer workflow efficiency and maintain a clear, high-quality project history.

---

## 2. Key Features

* **Quick Diff Input:** Easily paste the output from your `git diff` or `git diff --staged` command into the designated text area.
* **One-Click AI Generation:** Generate a complete commit message (Subject and Body) with a single button press.
* **Message Standardization:** Generated messages adhere to industry best practices and can be configured to follow specific standards (like Conventional Commits).
* **Error Handling:** Provides clear user feedback when API connection issues or processing failures occur.

---

## 3. Technologies Used

The project is built on a modern stack, utilizing a separation of concerns between the frontend and the AI-powered backend.

| Section | Technology | Primary Purpose |
| :--- | :--- | :--- |
| **Frontend** | **Vite + React.js** | Building a fast, component-based User Interface (UI). |
| **Styling** | **Tailwind CSS** | Modern, utility-first CSS framework for a responsive design. |
| **Backend** | **Node.js (Express)** | Providing a secure and scalable API server. |
| **AI Core** | **Google Gemini 2.5 Flash** | The Large Language Model (LLM) responsible for analyzing the diff and generating the final commit message. |

---

## 4. AI Support Explanation

The intelligence of the generator lies in its connection to the **Gemini 2.5 Flash** model:

1.  **Data Transmission:** The Frontend captures the raw `diffContent` and sends it to the Node.js/Express backend via a secure API call (`/api/commits/generate`).
2.  **AI Analysis:** The backend sends the raw Git Diff as a prompt to the **Gemini 2.5 Flash** model.
3.  **Intelligent Transformation:** The AI model is specifically prompted to:
    * **Understand Syntax:** Interpret the structure of the `git diff` (identifying file changes, additions, and deletions).
    * **Summarize Intent:** Determine the developer's core intent (Is it a fix? A new feature? A refactor?).
    * **Format Output:** Produce a concise, human-readable summary that adheres to desired commit message formats.

---

## 5. Installation and Setup Instructions

Follow these steps to get the Commit Message Generator running on your local machine.

### Prerequisites

* Node.js (LTS version)
* A **Gemini API Key** from Google AI Studio.

### 5.1. Backend Setup (Node.js/Express)

1.  Navigate into your backend project directory.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a file named `.env` and add your API Key and port:
    ```
    GEMINI_API_KEY="YOUR_GEMINI_API_KEY_HERE"
    PORT=5000
    ```
4.  Start the server:
    ```bash
    npm start
    ```

### 5.2. Frontend Setup (Vite/React)

1.  Navigate into your frontend project directory.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a file named `.env.local` to connect to your backend:
    ```
    VITE_API_URL=http://localhost:5000
    ```
4.  Run the application:
    ```bash
    npm run dev
    ```

The application should now be accessible in your web browser!
```eof

Dokumen ini sudah siap untuk Anda gunakan sebagai file utama repositori GitHub Anda.
Apakah ada bagian lain yang perlu Anda tambahkan atau revisi?
