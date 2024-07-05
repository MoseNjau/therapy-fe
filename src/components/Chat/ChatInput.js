// src/components/ChatInput.js

import React, { useState } from 'react';
import { Box, Input, Button, HStack } from '@chakra-ui/react';
import { sendMessage } from '../../api/api';

const ChatInput = ({ setMessages }) => {
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    try {
      const newMessage = await sendMessage(input);
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Box p={4} borderTopWidth="1px">
      <HStack>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          borderRadius="md"
          boxShadow="sm"
        />
        <Button
          onClick={handleSendMessage}
          colorScheme="teal"
          borderRadius="md"
          boxShadow="sm"
        >
          Send
        </Button>
      </HStack>
    </Box>
  );
};

export default ChatInput;
