import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

// Animación para el movimiento horizontal, estirando y luego acortando la estela
const trailMovement = keyframes`
  0% {
    transform: translateX(-10vw);
    width: 10px;
    opacity: 0;
  }
  20% {
    opacity: 0.7;
    width: 50px;
  }
  50% {
    width: 150px;
    opacity: 0.8;
  }
  80% {
    width: 80px;
    opacity: 0.8;
  }
  100% {
    transform: translateX(110vw);
    width: 10px;
    opacity: 0;
  }
`;

// Animación para el brillo pulsante
const glowPulse = keyframes`
  0%, 100% {
    filter: blur(0px);
  }
  50% {
    filter: blur(0px);
  }
`;

interface TrailProps {
  delay: string;
  duration: string;
  yPosition: string;
  color: string;
}

const Trail = ({ delay, duration, yPosition, color }: TrailProps) => (
  <Box
    position="absolute"
    top={yPosition}
    left="0"
    height="2px"
    background={`linear-gradient(90deg, transparent 0%, ${color} 20%, ${color} 80%, transparent 100%)`}
    animation={`
      ${trailMovement} ${duration} ${delay} infinite linear,
      ${glowPulse} 3s infinite ease-in-out
    `}
    boxShadow={`0 0 10px ${color}, 0 0 20px ${color}`}
  />
);

export const SpaceshipTrails = () => {
  // Diferentes tonos de azul y blanco para las estelas
  const colors = [
    'rgba(135, 206, 235, 0.7)',  // Azul cielo
    'rgba(255, 255, 255, 0.6)',  // Blanco
    'rgba(176, 196, 222, 0.7)',  // Azul acero claro
    'rgba(173, 216, 230, 0.7)',  // Azul claro
  ];

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      pointerEvents="none"
      zIndex={0}
      overflow="hidden"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Trail
          key={i}
          delay={`-${Math.random() * 30}s`}
          duration={`${30 + Math.random() * 20}s`}
          yPosition={`${10 + (Math.random() * 80)}%`}
          color={colors[Math.floor(Math.random() * colors.length)]}
        />
      ))}
    </Box>
  );
};

export default SpaceshipTrails;
