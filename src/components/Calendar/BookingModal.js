// src/components/Calendar/Calendar.js

import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';

const BookingModal = ({ isOpen, onClose, onBooking, selectedDate }) => {
  const [details, setDetails] = useState({ date: selectedDate, time: '', description: '' });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!details.time || !details.description) {
      toast({
        title: 'Error',
        description: 'Please fill out all fields.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    onBooking(details);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Book an Appointment</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input type="text" value={details.date} readOnly />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Time</FormLabel>
            <Input
              type="time"
              name="time"
              value={details.time}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              name="description"
              value={details.description}
              onChange={handleChange}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Book
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BookingModal;
