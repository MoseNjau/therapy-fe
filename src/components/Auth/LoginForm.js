import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, useToast, Heading, VStack, Icon } from '@chakra-ui/react';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/api';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast({ title: 'Login successful.', status: 'success', duration: 2000 });
      navigate('/dashboard');
    } catch (error) {
      toast({ title: 'Login failed.', description: error.message, status: 'error', duration: 2000 });
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} w="full" p={4} boxShadow="lg" borderRadius="md" bg="white">
      <VStack spacing={4}>
        <Heading as="h2" size="lg" color="teal.500">Login</Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
        </FormControl>
        <Button leftIcon={<Icon as={FaLock} />} type="submit" colorScheme="teal" width="full">Login</Button>
      </VStack>
    </Box>
  );
};

export default LoginForm;
