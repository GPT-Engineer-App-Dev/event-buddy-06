import { Container, VStack, Heading, Text, Button, Box, SimpleGrid, Image } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";

const events = [
  {
    id: 1,
    title: "Event 1",
    date: "2023-10-01",
    description: "Description for event 1",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Event 2",
    date: "2023-10-05",
    description: "Description for event 2",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    title: "Event 3",
    date: "2023-10-10",
    description: "Description for event 3",
    imageUrl: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Events Management
        </Heading>
        <Button leftIcon={<FaPlus />} colorScheme="teal" size="lg" alignSelf="center">
          Create New Event
        </Button>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {events.map(event => (
            <Box key={event.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={event.imageUrl} alt={event.title} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {event.title}
                </Heading>
                <Text fontSize="sm" color="gray.500" mb={4}>
                  <FaCalendarAlt /> {event.date}
                </Text>
                <Text>{event.description}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;