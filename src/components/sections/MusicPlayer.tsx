import { useState, useEffect } from 'react';
import { Button, Flex, Image  } from '@chakra-ui/react';
import Rammu from '../../img/rammu.png';
import { relative } from 'path';


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
        <Flex alignItems={"center"} justifyContent={"flex-end"} position={{base: "relative", md:"fixed"}} mt={20} ml={10}>
            <Button onClick={togglePlay} variant="unstyled" aria-label="Apretame si te gusta soda">
            <Image
                src={Rammu}
                w={"175px"}
                transform="scaleX(-1)" 
            />
            </Button>
            <Flex 
                position="relative" 
                bg="gray.700" 
                borderRadius="md" 
                p={2}
                color="white" 
                fontSize="lg" 
                right="10px" 
                ml={-6}
                bottom="10px" 
                borderTopRightRadius="xl"
                borderBottomRightRadius="xl"
                _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderWidth: '10px',
                    borderStyle: 'solid',
                    borderColor: 'gray.700 transparent transparent transparent',
                }}
            >
                {isPlaying ? 'Disfruta de Soda Stereo!' : 'Apretame si te gusta escuchar Soda Stereo'}
            </Flex>
        </Flex>
    );
};

export default MusicPlayer;
