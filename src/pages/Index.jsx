import { Container, VStack, Heading, Text, Button, Box, SimpleGrid, Image } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch" width="100%">
        <Heading as="h1" size="2xl" textAlign="center" mb={6}>
          Events Management
        </Heading>
        <Text fontSize="lg" textAlign="center" mb={6}>
          Manage your events efficiently and effortlessly.
        </Text>
        <Button leftIcon={<FaPlus />} colorScheme="teal" size="lg" alignSelf="center">
          Create New Event
        </Button>
        <Box mt={10}>
          <Heading as="h2" size="lg" mb={4}>
            Upcoming Events
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Event 1</Heading>
              <Text mt={4}>Details about Event 1</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Event 2</Heading>
              <Text mt={4}>Details about Event 2</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Event 3</Heading>
              <Text mt={4}>Details about Event 3</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Event 4</Heading>
              <Text mt={4}>Details about Event 4</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;