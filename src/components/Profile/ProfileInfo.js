// src/components/profile/profileInfo.js
import React from 'react';
import { Box, VStack, Text, Avatar } from '@chakra-ui/react';

const ProfileInfo = ({ profile }) => {
  return (
    <Box borderWidth="1px" p={4} borderRadius="md" boxShadow="md" w="100%">
      <VStack spacing={2} align="center">
        <Avatar size="xl" name={profile.name} src={profile.avatarUrl} />
        <Text fontSize="2xl" fontWeight="bold">{profile.name}</Text>
        <Text fontSize="md">{profile.email}</Text>
        {/* Add other profile information here */}
      </VStack>
    </Box>
  );
};

export default ProfileInfo;
