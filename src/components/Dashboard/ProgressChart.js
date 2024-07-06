// src/components/Dashboard/ProgressChart.js

import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import FilterMenu from './FilterMenu';

Chart.register(...registerables);

const ProgressChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Activities',
        data: data.map(item => item.activities),
        borderColor: 'teal',
        backgroundColor: 'rgba(56, 178, 172, 0.5)',
      },
    ],
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="md">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="md">Progress Over Time</Heading>
        <FilterMenu />
      </Flex>
      <Line data={chartData} />
    </Box>
  );
};

export default ProgressChart;
