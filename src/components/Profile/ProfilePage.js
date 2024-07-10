// src/components/Profile/ProfilePage.js
import React, { useEffect, useState } from 'react';
import { Box, VStack, Button, Spinner } from '@chakra-ui/react';
import { fetchUserProfile } from '../../api/api';
import ProfileInfo from './ProfileInfo';
import EditProfile from './EditProfile';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const data = await fetchUserProfile();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
    getUserProfile();
  }, []);

  const handleSaveProfile = (updatedProfile) => {
    setProfileData(updatedProfile);
    setIsEditing(false);
  };

  if (!profileData) {
    return (
      <Box p={4} maxW="600px" mx="auto">
        <VStack spacing={4} align="center">
          <Spinner size="xl" />
        </VStack>
      </Box>
    );
  }

  return (
    <Box p={4} maxW="600px" mx="auto">
      <VStack spacing={4} align="center">
        {isEditing ? (
          <EditProfile profile={profileData} onSave={handleSaveProfile} />
        ) : (
          <>
            <ProfileInfo profile={profileData} />
            <Button onClick={() => setIsEditing(true)} colorScheme="teal">Edit Profile</Button>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default ProfilePage;
