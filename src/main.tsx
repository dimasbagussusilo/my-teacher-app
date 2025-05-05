import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx' // Ensure App.tsx path is correct
import '@fontsource/inter/300.css'  // Light
import '@fontsource/inter/400.css'  // Regular
import '@fontsource/inter/500.css'  // Medium
import '@fontsource/inter/600.css'  // Semi-bold
import '@fontsource/inter/700.css'  // Bold
import './index.css'      // Import the CSS file with Tailwind directives

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </React.StrictMode>,
)
