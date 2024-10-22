import { useState, useEffect } from 'react';
import { Button, Flex, Image, Text} from '@chakra-ui/react';
import Rammu from '../../img/rammu.png';


const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio] = useState(new Audio('/soda.mp3')); // Cargar audio

    useEffect(() => {
        // Manejo cuando el usuario pausa o reproduce
        audio.addEventListener('ended', () => setIsPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setIsPlaying(false));
        };
    }, [audio]);

    const togglePlay = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <Flex w={"15vw"} mt={20} ml={10} zIndex={1} position={"absolute"}>
            <Button onClick={togglePlay} variant="unstyled" aria-label="Apretame si te gusta soda"  >
                <Image
                    src={Rammu}
                    transform="scaleX(-1)"
                />
            </Button>
            <Text
                position="relative"
                bg="gray.700"
                borderRadius="md"
                p={3}
                color="white"
                fontSize="lg"
                right="10px"
                ml={-6}
                fontFamily={'"Bebas Neue"'}
                fontWeight={400}
                bottom="10px"
                borderTopRightRadius="xl"
                borderBottomRightRadius="xl"
            >
                {isPlaying ? 'Disfruta de Soda Stereo!' : 'Apretame si te gusta escuchar Soda Stereo'}
            </Text>
        </Flex>
    );
};

export default MusicPlayer;
