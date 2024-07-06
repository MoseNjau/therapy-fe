// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import CalendarPage from './pages/Calendar';
import './App.css'; // You can import your global styles here

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Route>
          <Route path="/auth/*" element={<Auth />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
