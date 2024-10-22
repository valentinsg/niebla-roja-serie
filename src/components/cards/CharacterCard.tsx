import { Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

interface CharacterCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export const CharacterCard = ({ id, name, description, imageUrl }: CharacterCardProps) => (
  <ChakraLink
    as={RouterLink}
    to={`/character/${id}`}
    _hover={{ textDecoration: 'none' }}
  >
    <Box
      p={6}
      borderRadius="lg"
      bg="whiteAlpha.100"
      backdropFilter="blur(8px)"
      _hover={{ 
        transform: 'scale(1.02)', 
        transition: '0.2s',
        bg: 'whiteAlpha.200'
      }}
      transition="0.2s"
    >
      <Image
        src={imageUrl}
        alt={name}
        borderRadius="md"
        mb={4}
        w="100%"
        h="300px"
        objectFit="cover"
      />
      <Heading size="md" color="red.300" mb={4}>
        {name}
      </Heading>
      <Text>{description}</Text>
      <Button
        mt={4}
        variant="outline"
        colorScheme="red"
        size="sm"
        w="full"
      >
        Ver más
      </Button>
    </Box>
  </ChakraLink>
);
