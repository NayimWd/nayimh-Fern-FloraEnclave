import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css';
import './assets/css/Common.css';

let docTitle = document.title;
window.addEventListener("blur", ()=>{
  document.title = "We are waiting! ❤️";
});

window.addEventListener("focus", ()=>{
  document.title = docTitle;
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
