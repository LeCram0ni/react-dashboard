import { useState } from 'react'
import './App.css'
import Dashboard from '../pages/Dashboard'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import Calendar from '../components/Calendar';

function App() {

  return (
    <>

      <Dashboard />

      <p>Google Auth</p>
      <div className="login" style={{ colorScheme: 'light' }}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse?.credential);
            console.log(decoded);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </div>
      <Calendar/>
    </>
  )
}

export default App
