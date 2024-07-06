// src/components/EditProfile.js
import React, { useState } from 'react';
import { Box, VStack, FormControl, FormLabel, Input, Button, useToast } from '@chakra-ui/react';
import { updateProfile } from '../../api/api';
import { useHistory } from 'react-router-dom';

const EditProfile = ({ profile }) => {
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [avatarUrl, setAvatarUrl] = useState(profile.avatarUrl);

  const toast = useToast();
  const history = useHistory();

  const handleSaveProfile = async () => {
    try {
      const userData = { name, email, avatarUrl };
      await updateProfile(userData);
      toast({
        title: "Profile updated.",
        description: "Your profile has been successfully updated.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      history.push('/profile');
    } catch (error) {
      toast({
        title: "Error updating profile.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4} maxW="600px" mx="auto">
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Avatar URL</FormLabel>
          <Input value={avatarUrl} onChange={(e) => setAvatarUrl(e.target.value)} />
        </FormControl>
        <Button onClick={handleSaveProfile} colorScheme="teal">Save Profile</Button>
      </VStack>
    </Box>
  );
};

export default EditProfile;
