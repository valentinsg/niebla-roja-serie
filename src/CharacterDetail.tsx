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
import Norman from './img/norman.jpg';
import Jora from './img/jora.jpg';
import Kea from './img/kea.jpg';
import Nicole from './img/nicole.jpg';
import Rammus from './img/rammus.jpg';
import { RedFog } from './components/effects/RedFog';

const CharacterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const characterData = {
    "jora-white": {
      name: "Jora White",
      race: "Humano",
      complexion: "Atlética",
      skinTone: "Moreno",
      age: 41,
      height: "1.86 m",
      weight: "82 kg",
      role: "Mecánico",
      imageUrl: Jora,
      fullDescription: `

      Jora es un mecánico perteneciente a la luna satélite de Saturno, llamada Titán. Pasa sus días en su taller arreglando viejas naves u objetos que encuentre por el amplio y caluroso yermo. Es una persona solitaria y antipática pero de buen corazón. Lo único que llegó a amar fue a su mujer Elena y a su hija Laurina, que murieron en manos del primer oficial Norman Keys, perteneciente al imperio de la Guardia Roja en donde Jora trabajó tiempo atrás y mantiene un profundo odio, el cual lo lleva a unir fuerza con Kea Ströll y Nicole Smirnova para embarcarse en una gran aventura en busca de justicia y redención. 

      Durante su viaje vuelve a confiar en las personas y sentir lo que es una familia nuevamente, recobrando el sentido de lucha y pertenencia. Jora se convierte en una figura paternal muy importante en el grupo, donde muchas veces ejerce el papel de líder y guía al equipo.
      `,
      characteristics: [
        "Solitario y antipático, pero de buen corazón",
        "Líder natural",
        "Deseo de redención",
      ],
    },
    "kea-stroll": {
      name: "Kea Ströll",
      race: "Humano",
      complexion: "Delgada",
      skinTone: "Caucásico",
      age: 24,
      height: "1.72 m",
      weight: "68 kg",
      role: "Ladrón de segunda",
      imageUrl: Kea,
      fullDescription: `
Kea es un ladrón de segunda, hijo de una ama de casa y un padre que lo abandonó de pequeño. Pese a ser alguien bastante astuto, es una persona rota que refleja su dolor interno a través del humor, y al ser joven e inexperto, piensa que nada le puede salir mal y que la suerte está siempre a su favor. A pesar de su carisma y arrogancia, no tiene suerte con las mujeres pero siempre busca insistentemente  conquistar alguna dama. 

Por cosas del destino (y su arrogancia), es capturado por La Guardia Roja y llevado a una prisión de alta seguridad, pero su estadía es corta ya que se escapa en una cápsula defectuosa. Kea se estrella en una luna satélite de Saturno y ahí  conoce al mecánico Jora White. Al principio tuvieron una áspera primera impresión pero logran mitigar sus diferencias y unir fuerzas para aventurarse en la búsqueda del artefacto que les falta para poder controlar los diversos saltos espaciales. Durante su viaje comienza a tomarle cariño a Jora y ve en él una figura paterna en la cual apoyarse emocionalmente, y junto a Nicole Smirnova, aprende a tratar mejor a las mujeres y respetarlas. Gracias a su carisma e inocencia, Kea se convierte en un consuelo cómico para el grupo y atenúa la cruda y triste realidad de tener que combatir a la Guardia Roja, aunque a veces eso resulte un problema para el equipo.
      `,
      characteristics: [
        "Carismático y arrogante",
        "Inexperto pero decidido",
        "Consuelo cómico del grupo",
      ],
    },
    "nicole-smirnova": {
      name: "Nicole Smirnova",
      race: "Humano",
      complexion: "Delgada",
      skinTone: "Caucásico",
      age: 26,
      height: "1.67 m",
      weight: "60 kg",
      role: "Revolucionaria",
      imageUrl: Nicole,
      fullDescription: `
Nicole nació en un planeta congelado, desde pequeña tuvo que aprender a sobrevivir en temperaturas extremas que muchas veces bajaban a los -70 grados y a los bandidos que constantemente saqueaban la zona, culpables del brutal asesinato de su padre y su madre. Nicole escapa de su planeta y forma un grupo revolucionista para justiciar en planetas opresores. Tras varios años de guerra enfrentándose a la Guardia Roja, ella es la única sobreviviente y se ve obligada a  refugiarse en un planeta de mala muerte, volviéndose una persona fría, desconfiada y desesperanzada.  

Se une a Jora, Rammus y Kea como compañera de lucha, y a medida que avanza la aventura, profundiza más su relación con ellos y se hacen íntimos amigos. Nicole se convierte en un pilar fundamental dentro del equipo para resolver problemas y fortalecer aún más la unión y la fuerza, aportando madurez e inteligencia.
      `,
      characteristics: [
        "Fría y desconfiada",
        "Líder revolucionaria",
        "Pilar fundamental del equipo",
      ],
    },
    "norman-keys": {
      name: "Norman Keys",
      race: "Humano",
      complexion: "Atlética",
      skinTone: "Caucásico",
      age: 42,
      height: "1.84 m",
      weight: "84 kg",
      role: "Oficial de la Guardia Roja",
      imageUrl: Norman,
      fullDescription: `
Norman Keys es uno de los líderes de la Guardia Roja, un imperio colonizador que bajo su dictadura gobierna una gran cantidad de planetas, controlando sus recursos y a los seres que habitan en ellos. Norman es una persona autoritaria y sumamente disciplinado, poco empático y perteneciente a un linaje de dictadores y poderosos. Norman es totalmente fiel a la Guardia Roja y a sus creencias, haciendo todo lo necesario por el bien del imperio. Norman vive bajo la sombra de su padre, al cual siempre intenta impresionar, y a pesar de su carácter duro, es simplemente un niño con ganas de que su papá lo reconozca.
El antagonista no tiene idea de quiénes son los protagonistas, solo sabe que un prisionero  se fugó y se robó un artefacto sumamente importante. A medida que avanza la historia, se convierte en el principal enemigo de la trama y del grupo de protagonistas. Norman intenta hacerles la vida imposible y obstaculizar el cumplimiento de la misión, para que así la Guardia Roja siga gobernando los planetas y nada la despoje de su poder.
      `,
      characteristics: [
        "Autoritario y frío",
        "Leal a la Guardia Roja",
        "Complejo de inferioridad frente a su padre",
      ],
    },
    "rammu": {
      name: "R.A.M.M.U",
      race: "Robot",
      complexion: "Pequeño y ligero",
      skinTone: "N/A",
      age: "N/A",
      height: "50 cm",
      weight: "4 kg",
      role: "Compañero mecánico",
      imageUrl: Rammus,
      fullDescription: `
R.A.M.M.U, por sus sílabas “Robot Argentino Multifunción Mecánico Universal”, es un pequeño robot creado y distribuido por la antigua compañía argentina, “Mercado Libre”. Fue lanzado en el año 2022 por el aniversario N°40 de la famosa banda de los 80’s, Soda Stereo, el cual incorpora sus canciones más exitosas. Fue hallado en muy mal estado y reparado por Jora White en la luna Titán, sin saber cómo terminó ahí. Su comunicación es limitada y solo puede “hablar” mediante sonidos predefinidos y algunas palabras básicas. Jora se queda con él y se convierte en su mejor amigo, acompañándolo y ayudándolo en su solitaria vida.
      `,
      characteristics: [
        "Leal y divertido",
        "Comunicación limitada",
        "Acompañante confiable",
      ],
    },
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
      <RedFog />
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
              <Heading
                fontSize={{ base: "6xl", md: "8xl", lg: "9xl" }}
                color="#FF1A1A"
                fontFamily="'Bebas Neue', sans-serif"
                textShadow="0 0 20px rgba(255, 26, 26, 0.5)"
              >
                {character.name}
              </Heading>
              <Text color="red.200" fontSize="xl">
                {character.role}
              </Text>
              <Text fontSize="lg">
                <strong>Raza:</strong> {character.race}
              </Text>
              <Text fontSize="lg">
                <strong>Complexión:</strong> {character.complexion}
              </Text>
              <Text fontSize="lg">
                <strong>Tono de piel:</strong> {character.skinTone}
              </Text>
              <Text fontSize="lg">
                <strong>Edad:</strong> {character.age}
              </Text>
              <Text fontSize="lg">
                <strong>Altura:</strong> {character.height}
              </Text>
              <Text fontSize="lg">
                <strong>Peso:</strong> {character.weight}
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
