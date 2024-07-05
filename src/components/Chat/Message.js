// src/components/Message.js

import React from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';

const Message = ({ message }) => {
  const { sender, content, timestamp } = message;

  return (
    <HStack
      alignSelf={sender === 'me' ? 'flex-end' : 'flex-start'}
      bg={sender === 'me' ? 'teal.500' : 'gray.200'}
      color={sender === 'me' ? 'white' : 'black'}
      borderRadius="md"
      p={3}
      maxWidth="80%"
    >
      <Box>
        <Text fontWeight="bold">{sender}</Text>
        <Text>{content}</Text>
        <Text fontSize="xs">{new Date(timestamp).toLocaleTimeString()}</Text>
      </Box>
    </HStack>
  );
};

export default Message;
