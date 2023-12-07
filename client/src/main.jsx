import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './pages/App.jsx';
import AboutPage from './pages/about.jsx';
import CoursesTakenPage from './pages/courses_taken.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/courses_taken",
    element: <CoursesTakenPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);