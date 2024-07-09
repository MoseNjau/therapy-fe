import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import MainLayout from './layouts/MainLayout';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Resources from './pages/Resources';
import Tracking from './pages/Tracking';
import Notifications from './pages/Notifications';
import CalendarPage from './pages/CalendarPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: 'chat', element: <Chat /> },
      { path: 'profile', element: <Profile /> },
      { path: 'resources', element: <Resources /> },
      { path: 'tracking', element: <Tracking /> },
      { path: 'notifications', element: <Notifications /> },
      { path: 'calendar', element: <CalendarPage /> },
    ],
  },
  {
    path: '/auth/*',
    element: <Auth />,
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
