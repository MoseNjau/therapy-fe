// src/components/ProfileInfo.js

import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';

const ProfileInfo = ({ profile }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" boxShadow="md" p={4}>
      <VStack spacing={2} align="flex-start">
        <Text fontSize="xl">{profile.name}</Text>
        <Text fontSize="md">{profile.email}</Text>
        {/* Add other profile information here */}
      </VStack>
    </Box>
  );
};

export default ProfileInfo;
