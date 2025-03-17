// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import { LoadingProvider } from './components/Common/LoadingContext.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <LoadingProvider>
//       <App />
//     </LoadingProvider>
//   </StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
 import './index.css';
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <App />
  
  </React.StrictMode>
  
);
