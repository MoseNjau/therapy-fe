// src/components/Common/Sidebar.js
import React from 'react';
import { Box, VStack, HStack, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { FiHome, FiUser, FiMessageSquare, FiBook, FiTrendingUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const bg = useColorModeValue('teal.500', 'teal.700');
  const hoverBg = useColorModeValue('teal.600', 'teal.800');

  return (
    <Box
      position="fixed"
      left={0}
      w={{ base: 'full', md: 60 }}
      h="full"
      bg={bg}
      color="white"
      shadow="lg"
    >
      <VStack align="start" p="4" spacing="4">
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
