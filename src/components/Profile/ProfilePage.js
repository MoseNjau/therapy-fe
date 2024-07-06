// src/components/ProfilePage.js

import React, { useEffect, useState } from 'react';
import { Box, VStack, Text, Button, Avatar, Spinner } from '@chakra-ui/react';
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
    <Box p={4} maxW="600px" mx="auto">
      <VStack spacing={4} align="center">
        {profileData ? (
          <>
            <Avatar size="2xl" name={profileData.name} src={profileData.avatarUrl} />
            <ProfileInfo profile={profileData} />
            <Button as={Link} to="/profile/edit" colorScheme="teal">Edit Profile</Button>
          </>
        ) : (
          <Spinner size="xl" />
        )}
      </VStack>
    </Box>
  );
};

export default ProfilePage;
