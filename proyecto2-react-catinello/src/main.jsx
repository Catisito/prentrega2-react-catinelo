import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyAsQ_VxXHCrkcugQP5tqqwc9HGgRS0wahI",
  authDomain: "prueba-proyecto-a4e75.firebaseapp.com",
  projectId: "prueba-proyecto-a4e75",
  storageBucket: "prueba-proyecto-a4e75.appspot.com",
  messagingSenderId: "20141951708",
  appId: "1:20141951708:web:8bcc993fef2592ec7d4219"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
