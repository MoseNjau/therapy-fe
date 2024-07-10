// src/components/Profile/EditProfile.js
import React, { useState } from 'react';
import { Box, VStack, FormControl, FormLabel, Input, Button, useToast } from '@chakra-ui/react';
import { updateProfile } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const EditProfile = ({ profile, onSave }) => {
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [avatarUrl, setAvatarUrl] = useState(profile.avatarUrl);
  const [gender, setGender] = useState(profile.gender);
  const [phoneNumber, setPhoneNumber] = useState(profile.phoneNumber);
  const [address, setAddress] = useState(profile.address);

  const toast = useToast();
  const navigate = useNavigate();

  const handleSaveProfile = async () => {
    try {
      const userData = { name, email, avatarUrl, gender, phoneNumber, address };
      await updateProfile(userData);
      toast({
        title: "Profile updated.",
        description: "Your profile has been successfully updated.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      onSave(userData);
      navigate('/profile');
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
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <Input value={gender} onChange={(e) => setGender(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input value={address} onChange={(e) => setAddress(e.target.value)} />
        </FormControl>
        <Button onClick={handleSaveProfile} colorScheme="teal">Save Profile</Button>
      </VStack>
    </Box>
  );
};

export default EditProfile;
