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
      minH="300px"
      h={"100%"}
    >
      <Image
        src={imageUrl}
        alt={name}
        borderRadius="md"
        mb={4}
        w="100%"
        objectFit="cover"
      />
      <Heading size="lg" color="#FF1A1A"
        fontFamily="'Bebas Neue', sans-serif" mb={4}>
        {name}
      </Heading>
      <Text >{description}</Text>
      <Button
        mt={4}
        variant="outline"
        fontFamily="'Bebas Neue', sans-serif"
        size="sm"
        w="full"
        letterSpacing={1}
      >
        Ver más
      </Button>
    </Box>
  </ChakraLink>
);
