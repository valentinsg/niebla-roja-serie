import { Container, VStack, Heading, Grid } from '@chakra-ui/react';
import { CharacterCard } from '../cards/CharacterCard';
import { charactersData } from '../data/Characters';


export const Characters = () => (
    <Container maxW="container.xl" py={20} position="relative" zIndex={2}>
        <VStack spacing={12}>
            <Heading size="2xl" color="#FF1A1A"
                fontFamily="'Bebas Neue', sans-serif"
                textShadow="0 0 20px rgba(255, 26, 26, 0.5)">
                Personajes
            </Heading>
            <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                gap={8}
            >
                {charactersData.map((character) => (
                    <CharacterCard
                        key={character.id}
                        {...character}
                    />
                ))}
            </Grid>
        </VStack>
    </Container>
);
