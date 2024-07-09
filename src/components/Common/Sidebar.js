// src/components/Common/Sidebar.js
import React, { useState } from 'react';
import { Box, VStack, HStack, Icon, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { FiHome, FiUser, FiMessageSquare, FiBook, FiTrendingUp, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize';

const Sidebar = () => {
  const { width } = useWindowSize();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const bg = useColorModeValue('teal.500', 'teal.700');
  const hoverBg = useColorModeValue('teal.600', 'teal.800');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isMobile = width < 768;

  return (
    <>
      {isMobile && (
        <Box position="fixed" top="4" left="4" zIndex="overlay">
          <Icon as={isSidebarOpen ? FiX : FiMenu} boxSize="8" onClick={toggleSidebar} />
        </Box>
      )}
      <Box
        position="fixed"
        left={0}
        w={{ base: isMobile ? (isSidebarOpen ? 'full' : 0) : 60 }}
        h="full"
        bg={bg}
        color="white"
        shadow="lg"
        overflow="hidden"
        transition="width 0.2s"
        zIndex="modal"
      >
        <VStack align="start" p="4" spacing="4" display={isMobile && !isSidebarOpen ? 'none' : 'flex'}>
          <Text fontSize="2xl" fontWeight="bold">
            TherapyApp
          </Text>
          <SidebarItem to="/" icon={FiHome} label="Dashboard" hoverBg={hoverBg} />
          <SidebarItem to="/profile" icon={FiUser} label="Profile" hoverBg={hoverBg} />
          <SidebarItem to="/chat" icon={FiMessageSquare} label="Chat" hoverBg={hoverBg} />
          <SidebarItem to="/resources" icon={FiBook} label="Resources" hoverBg={hoverBg} />
          <SidebarItem to="/tracking" icon={FiTrendingUp} label="Tracking" hoverBg={hoverBg} />
        </VStack>
      </Box>
    </>
  );
};

const SidebarItem = ({ to, icon, label, hoverBg }) => (
  <HStack
    as={Link}
    to={to}
    p="2"
    borderRadius="md"
    _hover={{ bg: hoverBg }}
    w="full"
  >
    <Icon as={icon} boxSize="6" />
    <Text>{label}</Text>
  </HStack>
);

export default Sidebar;
