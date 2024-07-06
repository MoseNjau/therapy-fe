// src/components/Dashboard/FilterMenu.js

import React from 'react';
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';

const FilterMenu = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<FiMoreVertical />} variant="outline" />
      <MenuList>
        <MenuItem>Today</MenuItem>
        <MenuItem>Last Week</MenuItem>
        <MenuItem>Last Month</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default FilterMenu;
