// src/components/ResourceList.js

import React, { useEffect, useState } from 'react';
import { Box, Heading, VStack, Text, Spinner } from '@chakra-ui/react';
import ResourceItem from './ResourceItem';
import { fetchResources } from '../../api/api';

const ResourceList = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResources = async () => {
      try {
        const data = await fetchResources();
        setResources(data);
      } catch (error) {
        console.error('Error fetching resources:', error);
      } finally {
        setLoading(false);
      }
    };

    getResources();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Heading as="h1" mb={4} color="teal.600">Therapy Resources</Heading>
      <VStack spacing={4}>
        {resources.length ? (
          resources.map(resource => (
            <ResourceItem key={resource.id} resource={resource} />
          ))
        ) : (
          <Text>No resources available.</Text>
        )}
      </VStack>
    </Box>
  );
};

export default ResourceList;
