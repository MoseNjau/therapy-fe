// src/components/ChatWindow.js

import React, { useEffect, useState } from 'react';
import { Box, VStack, Spinner } from '@chakra-ui/react';
import { fetchMessages } from '../../api/api';
import Message from './Message';
import ChatInput from './ChatInput';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const data = await fetchMessages();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box flex="1" overflowY="auto" p={4}>
        <VStack spacing={4}>
          {messages.map(message => (
            <Message key={message.id} message={message} />
          ))}
        </VStack>
      </Box>
      <ChatInput setMessages={setMessages} />
    </Box>
  );
};

export default ChatWindow;
