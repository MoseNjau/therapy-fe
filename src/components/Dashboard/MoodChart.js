// src/components/Dashboard/MoodChart.js

import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react'; // Import Flex here
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import FilterMenu from './FilterMenu';

Chart.register(...registerables);

const MoodChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Mood Score',
        data: data.map(item => item.moodScore),
        borderColor: 'teal',
        backgroundColor: 'rgba(56, 178, 172, 0.5)',
      },
    ],
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="md">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="md">Mood Over Time</Heading>
        <FilterMenu />
      </Flex>
      <Bar data={chartData} />
    </Box>
  );
};

export default MoodChart;
