// Tracking.js
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ProgressTracker from '../components/Tracking/ProgressTracker';
import MoodTracker from '../components/Tracking/MoodTracker';

const Tracking = () => (
  <MainLayout>
    <div className="tracking-container">
      <ProgressTracker />
      <MoodTracker />
    </div>
  </MainLayout>
);

export default Tracking;