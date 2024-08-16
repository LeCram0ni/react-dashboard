import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="999547655016-h9575mhv1siinjl63thq48uriovcjb1e.apps.googleusercontent.com">

      <App />
      
    </GoogleOAuthProvider>
  </StrictMode>,
)
