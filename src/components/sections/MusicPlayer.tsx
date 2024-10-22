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
        <Flex w={{base: "45vw", md:"15vw"}} mt={20} ml={10} zIndex={999} position={"absolute"} >
            <Button w={{base: "40vw", md:"15vw"}} onClick={togglePlay} variant="unstyled" aria-label="Apretame si te gusta soda" mt={14} ml={{base: -5, md:0}}>
                <Image
                    src={Rammu}
                    transform="scaleX(-1)"
                />
            </Button>
            <Text
                bg="gray.700"
                borderRadius="md"
                p={4}
                color="white"
                fontSize={{base: "lg", md:"lg"}}
                right="10px"
                fontFamily={'"Bebas Neue"'}
                fontWeight={400}
                bottom="10px"
                borderTopRightRadius="xl"
                borderBottomRightRadius="xl"
            >
                {isPlaying ? 'Disfruta de Soda!!!' : 'Apretame si te gusta escuchar Soda Stereo!!!'}
            </Text>
        </Flex>
    );
};

export default MusicPlayer;
