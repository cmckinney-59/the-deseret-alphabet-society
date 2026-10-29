import type { JSX } from "react";

import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import RootLayout from "./Root";
import AboutPage from "./pages/AboutPage/AboutPage";
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import TransliteratorPage from "./pages/TransliteratorPages/TransliteratorPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/about" replace />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/resources",
        element: <ResourcesPage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/transliterator",
        element: <TransliteratorPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
