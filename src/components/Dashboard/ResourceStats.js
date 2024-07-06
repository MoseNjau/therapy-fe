// src/components/Dashboard/ResourceStats.js

import React from 'react';
import { Box, Text, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Heading } from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';

const ResourceStats = ({ stats }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="md">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="md">Resources Read</Heading>
        <Menu>
          <MenuButton as={IconButton} icon={<FiMoreVertical />} variant="outline" />
          <MenuList>
            <MenuItem>Today</MenuItem>
            <MenuItem>Last Week</MenuItem>
            <MenuItem>Last Month</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Text fontSize="2xl" fontWeight="bold" mt={4}>{stats.total}</Text>
      <Text color="gray.500">Total resources read</Text>
    </Box>
  );
};

export default ResourceStats;
