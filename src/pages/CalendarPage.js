import React from "react";
import { Box } from "@chakra-ui/react";
import MainLayout from "../layouts/MainLayout";
import Calendar from "../components/Calendar/Calendar";

const CalendarPage = () => {
  return (
    <Box p={4}>
      <Calendar />
    </Box>
  );
};

export default CalendarPage;
