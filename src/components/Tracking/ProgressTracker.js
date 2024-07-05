// src/components/ProgressTracker.js

import React, { useEffect, useState } from 'react';
import { Box, VStack, Text, Button, Input } from '@chakra-ui/react';
import { fetchProgressData, saveProgressData } from '../../api/api';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ProgressTracker = () => {
  const [progress, setProgress] = useState([]);
  const [activity, setActivity] = useState('');

  useEffect(() => {
    const getProgressData = async () => {
      try {
        const data = await fetchProgressData();
        setProgress(data);
      } catch (error) {
        console.error('Error fetching progress data:', error);
      }
    };

    getProgressData();
  }, []);

  const handleSaveProgress = async () => {
    if (activity.trim() === '') return;

    try {
      const newProgress = await saveProgressData({ activity, date: new Date().toISOString() });
      setProgress([...progress, newProgress]);
      setActivity('');
    } catch (error) {
      console.error('Error saving progress data:', error);
    }
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Daily Progress Tracker</Text>
      <VStack spacing={4}>
        <Input
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Log your mental health activity"
          borderRadius="md"
          boxShadow="sm"
        />
        <Button
          onClick={handleSaveProgress}
          colorScheme="teal"
          borderRadius="md"
          boxShadow="sm"
        >
          Save Progress
        </Button>
      </VStack>
      <Box mt={8} height={300}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={progress} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <Line type="monotone" dataKey="activity" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default ProgressTracker;
