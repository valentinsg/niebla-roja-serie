import { Box, Container, Grid, Heading, VStack, Text } from '@chakra-ui/react';
import { StarField } from './components/effects/Starfield';
import { RedFog } from './components/effects/RedFog';
import { SpaceshipTrails } from './components/effects/SpaceshipTrails';
import { Hero } from './components/sections/Hero';
import { Synopsis } from './components/sections/Synopsis';
import { Characters } from './components/sections/Characters';
import MusicPlayer from './components/sections/MusicPlayer';

const episodes = [
  {
    id: 1,
    title: 'Episodio 1: Prófugos',
    description: 'Jora White trabaja en su taller en Titán cuando una nave se estrella cerca de él. Al investigar, conoce a Kea Ströll, un prisionero que ha escapado de la Guardia Roja con una llave que controla los saltos espaciales. Ambos se embarcan en la misión de conseguir el artefacto faltante.'
  },
  {
    id: 2,
    title: 'Episodio 2: En la ciudad de la furia',
    description: 'Jora y Kea llegan al planeta Astra en busca de suministros. En un bar conocen a Nicole Smirnova, una ex líder revolucionaria que se uné a ellos. Mientras tanto, se revela el poder opresivo de la Guardia Roja, liderada por Norman Keys.'
  },
  {
    id: 3,
    title: 'Episodio 3: Cuando pase el temblor',
    description: 'Durante su viaje, la nave enfrenta una lluvia de meteoritos debido a un desperfecto. La tripulación debe trabajar en equipo para superar el reto y continuar con su misión.'
  },
  {
    id: 4,
    title: 'Episodio 4: Sueles dejarme solo',
    description: 'Nicole revive sus traumas pasados en un sueño, recordando la muerte de sus padres y sus primeros días con el grupo revolucionario. Este episodio explora su historia y motivaciones.'
  },
  {
    id: 5,
    title: 'Episodio 5: Lo que sangra',
    description: 'La nave se sobrecalienta y deben detenerse en medio del espacio. Durante la espera, Jora revela cómo la Guardia Roja asesinó a su familia y cuenta cómo conoció a R.A.M.M.U., su fiel compañero.',
  },
  {
    id: 6,
    title: 'Episodio 6: Nada personal',
    description: 'Se muestra el origen de Norman Keys, moldeado por su cruel padre. Una caravana de la Guardia Roja localiza la nave del equipo y comienza una feroz persecución. Los protagonistas logran escapar, pero con daños considerables.'
  },
  {
    id: 7,
    title: 'Episodio 7: Entre caníbales',
    description: 'La nave cae en un planeta desconocido habitado por caníbales. R.A.M.M.U. se sacrifica para rescatar a Jora y al equipo cuando son capturados por los nativos.',
  },
  {
    id: 8,
    title: 'Episodio 8: De música ligera',
    description: 'Mientras Jora repara a R.A.M.M.U, el robot reproduce una canción que provoca que Kea recuerde su infancia, el abandono de su padre y su captura por la Guardia Roja.'
  },
  {
    id: 9,
    title: 'Episodio 9: El séptimo día',
    description: 'La tripulación se infiltra en la Base Madre de la Guardia Roja en busca del segundo artefacto, enfrentándose a los soldados de Norman Keys, quien se une personalmente al combate.'
  },
  {
    id: 10,
    title: 'Episodio 10: Un millón de años luz',
    description: 'En la batalla final, Kea se sacrifica para salvar a Jora y el equipo consigue el artefacto faltante. Usan el artefacto completo para escapar en un salto espacial, y en el final, se despiden emotivamente de Kea.'
  }
];

const App = () => {
  return (
    <Box minH="100vh" bg="black" color="white" display={"flex"} flexDir={"column"}>
      <MusicPlayer />
      <StarField />
      <RedFog />
      <SpaceshipTrails />
      <Hero />
      <Synopsis />
      <Characters />
      <Container maxW="container.xl" py={20}>
        <VStack spacing={12}>
          <Heading
            size="2xl"
            color="#FF1A1A"
            fontFamily="'Bebas Neue', sans-serif"
            textShadow="0 0 20px rgba(255, 26, 26, 0.5)">
            Episodios
          </Heading>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={8}
          >
            {episodes.map((ep) => (
              <Box
                key={ep.id}
                p={6}
                borderRadius="lg"
                bg="whiteAlpha.50"
                backdropFilter="blur(8px)"
              >
                <Heading size="lg" color="#FF1A1A"
                  fontFamily="'Bebas Neue', sans-serif" mb={4}>
                  {ep.title}
                </Heading>
                <Text>
                  {ep.description}
                </Text>
              </Box>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default App;