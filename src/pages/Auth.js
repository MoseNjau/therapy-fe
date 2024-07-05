// Auth.js
import React from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Image } from '@chakra-ui/react';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';
import logo from '../assets/images/logo.png'; // Add your logo here

const Auth = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
    >
      <Box
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        maxW="md"
        width="full"
        textAlign="center"
      >
        <Image src={logo} alt="Logo" mb={4} mx="auto" boxSize="100px" />
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab _selected={{ color: 'white', bg: 'teal.500' }}>Login</Tab>
            <Tab _selected={{ color: 'white', bg: 'teal.500' }}>Register</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LoginForm />
            </TabPanel>
            <TabPanel>
              <RegisterForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Auth;
