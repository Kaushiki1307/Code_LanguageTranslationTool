# 🌐 Dialect | Modern Language Translation Tool

<div align="center">
  
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

**✨ A sleek, powerful translation tool with advanced features ✨**

</div>

This project is a modern, responsive language translation tool built with React and powered by Google Cloud Translation API. It features a beautiful UI, real-time translation, and multiple accessibility features.

## ✨ Features

<table>
  <tr>
    <td>⚡ <b>Real-time Translation</b></td>
    <td>Smart debouncing translates text as you type with minimal delay</td>
  </tr>
  <tr>
    <td>🔍 <b>Language Auto-Detection</b></td>
    <td>Automatically identifies the source language</td>
  </tr>
  <tr>
    <td>🔄 <b>Language Swapping</b></td>
    <td>One-click exchange between source and target languages</td>
  </tr>
  <tr>
    <td>📋 <b>Copy to Clipboard</b></td>
    <td>Instantly copy translated text with visual feedback</td>
  </tr>
  <tr>
    <td>🔊 <b>Text-to-Speech</b></td>
    <td>Listen to pronunciation in both source and target languages</td>
  </tr>
  <tr>
    <td>📱 <b>Responsive Design</b></td>
    <td>Beautiful interface on all devices - desktop, tablet, and mobile</td>
  </tr>
</table>

## 🛠️ Technology Stack

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Google Cloud" />
</div>

- **🔷 Frontend:** React with Vite for lightning-fast development
- **🎨 Styling:** Tailwind CSS with custom animations and gradients
- **🔌 Backend API:** Express.js / Serverless Function (Node.js)
- **🔄 Translation:** Google Cloud Translation API

## 🚀 Setup and Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google Cloud Translation API key
- Git installed on your machine

### Installation Steps

1.  **📥 Clone the repository:**
    ```bash
    git clone https://github.com/Kaushiki1307/Code_LanguageTranslationTool.git
    cd Code_LanguageTranslationTool
    ```

2.  **📦 Install dependencies:**
    ```bash
    npm install
    ```

3.  **🔑 Set up environment variables:**
    Create a `.env` file in the root of the project:
    ```env
    GOOGLE_TRANSLATE_API_KEY="YOUR_GOOGLE_CLOUD_API_KEY"
    ```
    > ⚠️ **Security Note:** The `.env` file is already in `.gitignore` to prevent your API keys from being published to GitHub. Never commit sensitive keys or credentials!

4.  **🏃‍♂️ Start the development servers:**
    ```bash
    # Start API server
    npm run server
    
    # In a new terminal, start frontend
    npm run dev
    ```
    
5.  **🌐 Access the application:**
    Open your browser and go to:
    ```
    http://localhost:5173
    ```

### 📱 Preview

<div align="center">
  <img src="https://raw.githubusercontent.com/Kaushiki1307/Code_LanguageTranslationTool/master/preview.png" alt="Dialect Translation Tool Screenshot" width="80%" />
</div>

## 🚢 Deployment

This application is configured for easy deployment on platforms like Vercel or Netlify.

<div align="center">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify" />
</div>

### Deployment Steps:

1.  **📤 Initialize Git and push your code to GitHub:**
    ```bash
    # Initialize Git repository (if not already done)
    git init
    
    # Add files (gitignore is already set up to exclude sensitive files)
    git add .
    
    # Commit your changes
    git commit -m "Ready for deployment"
    
    # Add your GitHub repository as remote
    git remote add origin https://github.com/Kaushiki1307/Code_LanguageTranslationTool.git
    
    # Push to GitHub
    git push -u origin main
    ```

2.  **🔗 Connect your repository:**
    - Sign in to [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
    - Import your GitHub repository
    - Follow the setup wizard

3.  **🔐 Configure environment variables:**
    - Add `GOOGLE_TRANSLATE_API_KEY` in the project settings

4.  **🎉 Deploy!**
    - The serverless function in the `api` directory will be automatically detected and deployed
    - Your translation app will be live in minutes!

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.

---

<div align="center">
  <p>⭐ Star this repository if you found it useful! ⭐</p>
  <p>Created by Kaushiki Baidya</p>
</div>
