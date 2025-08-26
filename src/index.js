import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter(
  [
    {
      path: "/*",  // catch-all so your <App /> handles the <Routes />
      element: <App />,
    },
  ],
  {
    future: {
      v7_startTransition: true, // ✅ enables new behavior now
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
