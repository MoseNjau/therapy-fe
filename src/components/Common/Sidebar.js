import React from 'react';
import { Box, VStack, HStack, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { FiHome, FiUser, FiMessageSquare, FiBook, FiTrendingUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  const bg = useColorModeValue('teal.500', 'teal.700');
  const hoverBg = useColorModeValue('teal.600', 'teal.800');

  return (
    <Box
      position="fixed"
      left={0}
      w={isOpen ? 60 : 20}
      h="full"
      bg={bg}
      color="white"
      shadow="lg"
      overflow="hidden"
      transition="width 0.2s"
      zIndex="modal"
    >
      <VStack align="start" p="4" spacing="4">
        <Text fontSize="2xl" fontWeight="bold" display={isOpen ? 'block' : 'none'}>
          TherapyApp
        </Text>
        <SidebarItem to="/" icon={FiHome} label="Dashboard" hoverBg={hoverBg} isOpen={isOpen} />
        <SidebarItem to="/profile" icon={FiUser} label="Profile" hoverBg={hoverBg} isOpen={isOpen} />
        <SidebarItem to="/chat" icon={FiMessageSquare} label="Chat" hoverBg={hoverBg} isOpen={isOpen} />
        <SidebarItem to="/resources" icon={FiBook} label="Resources" hoverBg={hoverBg} isOpen={isOpen} />
        <SidebarItem to="/tracking" icon={FiTrendingUp} label="Tracking" hoverBg={hoverBg} isOpen={isOpen} />
      </VStack>
    </Box>
  );
};

const SidebarItem = ({ to, icon, label, hoverBg, isOpen }) => (
  <HStack
    as={Link}
    to={to}
    p="2"
    borderRadius="md"
    _hover={{ bg: hoverBg }}
    w="full"
  >
    <Icon as={icon} boxSize="6" />
    <Text display={isOpen ? 'block' : 'none'}>{label}</Text>
  </HStack>
);

export default Sidebar;
