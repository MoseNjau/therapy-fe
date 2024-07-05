// src/components/RegisterForm.js
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, useToast, Heading, VStack, Icon } from '@chakra-ui/react';
import { FaUserPlus, FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api/api';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({ title: 'Passwords do not match.', status: 'error', duration: 2000 });
      return;
    }
    try {
      await register(email, password);
      toast({ title: 'Registration successful.', status: 'success', duration: 2000 });
      navigate('/dashboard');
    } catch (error) {
      toast({ title: 'Registration failed.', description: error.message, status: 'error', duration: 2000 });
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} w="full" p={4} boxShadow="lg" borderRadius="md" bg="white">
      <VStack spacing={4}>
        <Heading as="h2" size="lg" color="teal.500">Register</Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
        </FormControl>
        <FormControl id="confirm-password" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" />
        </FormControl>
        <Button leftIcon={<Icon as={FaUserPlus} />} type="submit" colorScheme="teal" width="full">Register</Button>
      </VStack>
    </Box>
  );
};

export default RegisterForm;
