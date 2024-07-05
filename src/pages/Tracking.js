// Tracking.js
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ProgressTracker from '../components/Tracking/ProgressTracker';
import MoodTracker from '../components/Tracking/MoodTracker';

const Tracking = () => {
  return (
    <MainLayout>
      <Tabs variant="soft-rounded" colorScheme="teal">
        <TabList>
          <Tab>Progress Tracker</Tab>
          <Tab>Mood Tracker</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ProgressTracker />
          </TabPanel>
          <TabPanel>
            <MoodTracker />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </MainLayout>
  );
};

export default Tracking;
