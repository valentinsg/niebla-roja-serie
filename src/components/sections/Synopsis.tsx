import { Container, VStack, Heading, Text } from '@chakra-ui/react';

export const Synopsis = () => (
  <Container maxW="container.xl" centerContent>
    <VStack minH="100vh" justify="center" spacing={12} py={20}>
      <Heading size="2xl" color="red.300">
        Sinopsis
      </Heading>
      <Text fontSize="lg" maxW="4xl" textAlign="center" lineHeight="tall">

      En la luna de Titán, Jora White, un mecánico solitario, se topa con Kea Ströll, un fugitivo de la temida Guardia Roja, después de que su nave se estrella cerca de su taller. Kea lleva consigo un artefacto misterioso que necesita ser completado para controlar los saltos espaciales. Sin estar del todo seguro, Jora decide ayudarlo en su misión, y juntos se embarcan en una peligrosa aventura. En su viaje, se une Nicole Smirnova, una ex líder revolucionaria, y enfrentan todo tipo de amenazas, mientras sus lazos se fortalecen y Jora confronta su pasado.      </Text>
    </VStack>
  </Container>
);