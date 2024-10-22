import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const twinkle = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

interface StarProps {
  style: React.CSSProperties;
}

const Star = ({ style }: StarProps) => (
  <Box
    position="absolute"
    w="2px"
    h="2px"
    bg="white"
    borderRadius="full"
    animation={`${twinkle} 3s infinite`}
    style={style}
  />
);

export const StarField = () => {
  const [stars, setStars] = useState<{ left: string; top: string; animationDelay: string; opacity: number; }[]>([]);

  useEffect(() => {
    const starCount = 200;
    const newStars = Array.from({ length: starCount }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      opacity: Math.random()
    }));
    
    setStars(newStars);
  }, []);

  return (
    <Box position="fixed" inset="0" overflow="hidden" pointerEvents="none">
      {stars.map((style, index) => (
        <Star key={index} style={style} />
      ))}
    </Box>
  );
};