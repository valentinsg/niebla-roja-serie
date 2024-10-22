// CharacterDetail.tsx
import {
    Box,
    Container,
    Heading,
    Text,
    Image,
    VStack,
    Button,
    Grid,
  } from '@chakra-ui/react';
  import { useParams, useNavigate } from 'react-router-dom';
  
  const CharacterDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
  
    // Aquí deberías obtener los datos del personaje basado en el ID
    // Este es un ejemplo estático
    const characterData = {
      "ana-silva": {
        name: "Ana Silva",
        role: "Detective Principal",
        imageUrl: "/api/placeholder/800/400",
        fullDescription: `
          Ana Silva, una detective brillante y tenaz, llegó al pueblo de Valle Sombrío 
          hace cinco años siguiendo una serie de casos sin resolver. Lo que comenzó como 
          una investigación rutinaria se transformó en una obsesión cuando descubrió la 
          conexión entre los desaparecidos y la misteriosa niebla roja que envuelve el 
          pueblo cada noche.
  
          Con un pasado marcado por sus propias pérdidas, Ana desarrolló una intuición 
          única para lo sobrenatural, aunque su mente analítica lucha constantemente 
          por encontrar explicaciones racionales a los eventos inexplicables que 
          presencia.
        `,
        characteristics: [
          "Intuición aguda",
          "Escepticismo racional",
          "Determinación inquebrantable",
          "Pasado misterioso"
        ]
      }
      // ... otros personajes
    };
  
    const character = characterData[id as keyof typeof characterData];
  
    if (!character) {
      return (
        <Container centerContent py={20}>
          <Text>Personaje no encontrado</Text>
          <Button onClick={() => navigate('/')}>Volver al inicio</Button>
        </Container>
      );
    }
  
    return (
      <Box minH="100vh" bg="black" color="white">
        <Container maxW="container.xl" py={20}>
          <VStack spacing={8} align="stretch">
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              colorScheme="red"
              alignSelf="flex-start"
            >
              ← Volver
            </Button>
  
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
              <Image
                src={character.imageUrl}
                alt={character.name}
                borderRadius="lg"
                objectFit="cover"
                h="400px"
              />
              
              <VStack align="stretch" spacing={6}>
                <Heading color="red.300" size="2xl">
                  {character.name}
                </Heading>
                <Text color="red.200" fontSize="xl">
                  {character.role}
                </Text>
                
                <Box>
                  <Heading size="md" color="red.300" mb={4}>
                    Características
                  </Heading>
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    {character.characteristics.map((trait, index) => (
                      <Box 
                        key={index}
                        p={3}
                        bg="whiteAlpha.100"
                        borderRadius="md"
                        textAlign="center"
                      >
                        {trait}
                      </Box>
                    ))}
                  </Grid>
                </Box>
              </VStack>
            </Grid>
  
            <Box>
              <Heading size="lg" color="red.300" mb={4}>
                Historia
              </Heading>
              <Text 
                whiteSpace="pre-line"
                fontSize="lg"
                lineHeight="tall"
              >
                {character.fullDescription}
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
    );
  };
  
  export default CharacterDetail;