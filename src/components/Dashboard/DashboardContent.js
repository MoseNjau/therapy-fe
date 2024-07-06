// src/components/Dashboard/DashboardContent.js

import React, { useEffect, useState } from 'react';
import { Box, Grid, GridItem, Heading, Spinner } from '@chakra-ui/react';
import ResourceStats from './ResourceStats';
import ProgressSummary from './ProgressSummary';
import ProgressChart from './ProgressChart';
import MoodChart from './MoodChart';
import { fetchDashboardData } from '../../api/api';

const DashboardContent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchDashboardData();
        setData(result);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    getData();
  }, []);

  return (
    <Box p={4}>
      <Heading mb={6}>Dashboard</Heading>
      {data ? (
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem colSpan={1}>
            <ResourceStats stats={data.resourceStats} />
          </GridItem>
          <GridItem colSpan={1}>
            <ProgressSummary summary={data.progressSummary} />
          </GridItem>
          <GridItem colSpan={2}>
            <ProgressChart data={data.progressData} />
          </GridItem>
          <GridItem colSpan={2}>
            <MoodChart data={data.moodData} />
          </GridItem>
        </Grid>
      ) : (
        <Spinner size="xl" />
      )}
    </Box>
  );
};

export default DashboardContent;
