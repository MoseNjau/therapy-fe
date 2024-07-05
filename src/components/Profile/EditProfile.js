// src/components/EditProfile.js

import React, { useState } from 'react';
import { Box, VStack, Text, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { updateProfile } from '../../api/api';
import { useHistory } from 'react-router-dom';

const EditProfile = ({ profile }) => {
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);

  const history = useHistory();

  const handleSaveProfile = async () => {
    try {
      const userData = { name, email }; // Add other fields as needed
      await updateProfile(userData);
      history.push('/profile');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
      <VStack spacing={4} align="flex-start">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <Button onClick={handleSaveProfile} colorScheme="blue">Save Profile</Button>
      </VStack>
    </Box>
  );
};

export default EditProfile;
