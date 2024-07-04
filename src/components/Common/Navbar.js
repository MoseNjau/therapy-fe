// src/components/Common/Navbar.js
import React from 'react';
import { Box, Flex, Text, IconButton, Avatar, Menu, MenuButton, MenuList, MenuItem, useColorMode } from '@chakra-ui/react';
import { FiBell, FiUser, FiLogOut, FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      justify="space-between"
      align="center"
      p="4"
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      shadow="sm"
      borderBottomWidth="1px"
    >
      <Text fontSize="xl" fontWeight="bold">
        Dashboard
      </Text>
      <Flex align="center">
        <IconButton
          variant="ghost"
          icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
          aria-label="Toggle color mode"
          mr="4"
          onClick={toggleColorMode}
        />
        <IconButton
          variant="ghost"
          icon={<FiBell />}
          aria-label="Notifications"
          mr="4"
        />
        <Menu>
          <MenuButton>
            <Avatar size="sm" />
          </MenuButton>
          <MenuList>
            <MenuItem icon={<FiUser />}>Profile</MenuItem>
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
