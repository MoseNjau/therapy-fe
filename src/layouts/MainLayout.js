// src/layouts/MainLayout.js
import React, { useState } from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Sidebar from '../components/Common/Sidebar';
import Navbar from '../components/Common/Navbar';
import Footer from '../components/Common/Footer';
import { useWindowSize } from '../hooks/useWindowSize';

const MainLayout = () => {
  const { width } = useWindowSize();
  const isSmallScreen = width < 768;
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isSmallScreen);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Flex>
      <Sidebar isOpen={isSidebarOpen} />
      <Box
        as="main"
        flex="1"
        ml={{ base: 0, md: isSidebarOpen ? 60 : 20 }}
        transition="margin-left 0.2s ease"
      >
        <Box position="fixed" top="4" left={isSidebarOpen ? { base: '16', md: '64' } : '16'} zIndex="overlay">
          <IconButton
            aria-label="Toggle Sidebar"
            icon={isSidebarOpen ? <FiX /> : <FiMenu />}
            onClick={handleToggleSidebar}
          />
        </Box>
        <Navbar />
        <Box p="4" mt="12">
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Flex>
  );
};

export default MainLayout;
