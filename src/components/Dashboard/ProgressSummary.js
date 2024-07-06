// src/components/Dashboard/ProgressSummary.js

import React from 'react';
import { Box, Text, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Heading } from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';

const ProgressSummary = ({ summary }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="md">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="md">Progress Summary</Heading>
        <Menu>
          <MenuButton as={IconButton} icon={<FiMoreVertical />} variant="outline" />
          <MenuList>
            <MenuItem>Today</MenuItem>
            <MenuItem>Last Week</MenuItem>
            <MenuItem>Last Month</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Text fontSize="2xl" fontWeight="bold" mt={4}>{summary.totalActivities}</Text>
      <Text color="gray.500">Activities logged</Text>
      <Text fontSize="2xl" fontWeight="bold" mt={4}>{summary.totalTimeSpent} hrs</Text>
      <Text color="gray.500">Total time spent</Text>
    </Box>
  );
};

export default ProgressSummary;
