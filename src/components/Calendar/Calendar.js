// src/components/Calendar/Calendar.js

import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, VStack, Spinner, useToast } from '@chakra-ui/react';
import { fetchCalendarEvents, createCalendarEvent } from '../../api/api';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import BookingModal from './BookingModal';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchCalendarEvents();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching calendar events:', error);
        toast({
          title: 'Error',
          description: 'Could not fetch calendar events.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, [toast]);

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setIsModalOpen(true);
  };

  const handleBooking = async (details) => {
    try {
      await createCalendarEvent(details);
      toast({
        title: 'Success',
        description: 'Appointment booked successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setIsModalOpen(false);
      setSelectedDate(null);
    } catch (error) {
      console.error('Error creating calendar event:', error);
      toast({
        title: 'Error',
        description: 'Could not book the appointment.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Heading mb={6}>Calendar</Heading>
      <VStack spacing={4}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
        />
      </VStack>
      {isModalOpen && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onBooking={handleBooking}
          selectedDate={selectedDate}
        />
      )}
    </Box>
  );
};

export default Calendar;
