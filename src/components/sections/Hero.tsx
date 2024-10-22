import { VStack, Container, Text, Button, Heading } from '@chakra-ui/react';

export const Hero = () => (
  <Container maxW="container.xl" centerContent position="relative" zIndex={2}>
    <VStack minH="100vh" justify="center" spacing={8}>
      <Heading
        fontSize={{ base: "6xl", md: "8xl", lg: "9xl" }}
        color="#FF1A1A"
        fontFamily="'Bebas Neue', sans-serif"
        textShadow="0 0 20px rgba(255, 26, 26, 0.5)"
      >
        Niebla Roja
      </Heading>
      <Text fontSize="xl" maxW="2xl" textAlign="center">
        Sumérgete en el misterio y la intriga de nuestra serie
      </Text>
      <Button
        colorScheme="red"
        size="lg"
        _hover={{ transform: 'scale(1.05)' }}
        transition="0.2s"
      >
        Ver Ahora
      </Button>
    </VStack>
  </Container>
);