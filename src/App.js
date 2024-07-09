import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import theme from "./theme";
import MainLayout from "./layouts/MainLayout";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";
import Tracking from "./pages/Tracking";
import Notifications from "./pages/Notifications";
import CalendarPage from "./pages/CalendarPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/auth/*" element={<Auth />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
