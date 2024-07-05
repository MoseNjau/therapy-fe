// src/components/ProfilePage.js

import React, { useEffect, useState } from 'react';
import { Box, VStack, Text, Button } from '@chakra-ui/react';
import { fetchUserProfile } from '../../api/api';
import ProfileInfo from './ProfileInfo';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);

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

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
      <VStack spacing={4} align="flex-start">
        {profileData ? (
          <>
            <ProfileInfo profile={profileData} />
            <Button as={Link} to="/profile/edit" colorScheme="blue">Edit Profile</Button>
          </>
        ) : (
          <Text>Loading profile...</Text>
        )}
      </VStack>
    </Box>
  );
};

export default ProfilePage;
