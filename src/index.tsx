import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './pages/App';
import MyPokemon from './pages/MyPokemon';
import SharePoke from './pages/SharePoke';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "my",
    element: <MyPokemon />
  },
  {
    path: ":id",
    element: <SharePoke />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
