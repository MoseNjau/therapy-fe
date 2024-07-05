// src/components/Notifications.js

import React, { useEffect, useState } from 'react';
import { Box, VStack, Text, List, ListItem, ListIcon, Heading } from '@chakra-ui/react';
import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons';
import { fetchNotifications } from '../../api/api';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    getNotifications();
  }, []);

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>Notifications</Heading>
      <VStack spacing={4}>
        <List spacing={3} w="100%">
          {notifications.map((notification, index) => (
            <ListItem key={index} p={3} boxShadow="md" borderRadius="md" borderWidth="1px" borderColor="gray.200">
              <ListIcon as={notification.type === 'reminder' ? InfoIcon : CheckCircleIcon} color={notification.type === 'reminder' ? 'blue.500' : 'green.500'} />
              <Text fontSize="lg">{notification.message}</Text>
              <Text fontSize="sm" color="gray.500">{new Date(notification.date).toLocaleString()}</Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
};

export default Notifications;
