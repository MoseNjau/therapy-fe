// src/components/MoodTracker.js

import React, { useState, useEffect } from 'react';
import { Box, VStack, Text, Button, Select } from '@chakra-ui/react';
import { fetchMoodData, saveMoodData } from '../../api/api';

const MoodTracker = () => {
  const [mood, setMood] = useState('');
  const [moodHistory, setMoodHistory] = useState([]);

  useEffect(() => {
    const getMoodData = async () => {
      try {
        const data = await fetchMoodData();
        setMoodHistory(data);
      } catch (error) {
        console.error('Error fetching mood data:', error);
      }
    };

    getMoodData();
  }, []);

  const handleSaveMood = async () => {
    if (mood.trim() === '') return;

    try {
      const newMood = await saveMoodData({ mood, date: new Date().toISOString() });
      setMoodHistory([...moodHistory, newMood]);
      setMood('');
    } catch (error) {
      console.error('Error saving mood data:', error);
    }
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Daily Mood Tracker</Text>
      <VStack spacing={4}>
        <Select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="Select your mood"
          borderRadius="md"
          boxShadow="sm"
        >
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="anxious">Anxious</option>
          <option value="neutral">Neutral</option>
        </Select>
        <Button
          onClick={handleSaveMood}
          colorScheme="teal"
          borderRadius="md"
          boxShadow="sm"
        >
          Save Mood
        </Button>
      </VStack>
      <Box mt={8}>
        {moodHistory.map((entry, index) => (
          <Text key={index}>
            {new Date(entry.date).toLocaleDateString()} - {entry.mood}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default MoodTracker;
