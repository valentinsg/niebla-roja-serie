import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

// Animación principal de la niebla
const fogAnimation = keyframes`
  0% {
    transform: translateX(-100%) translateY(0);
  }
  50% {
    transform: translateX(0) translateY(-10%);
  }
  100% {
    transform: translateX(100%) translateY(0);
  }
`;

// Otra animación para añadir variedad
const fogAnimation2 = keyframes`
  0% {
    transform: translateX(100%) translateY(0);
  }
  50% {
    transform: translateX(0) translateY(15%);
  }
  100% {
    transform: translateX(-100%) translateY(-5%);
  }
`;

// Animación para que la niebla aparezca y desaparezca suavemente
const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 0.2;
  }
`;

export const RedFog = () => (
  <Box
    position="fixed"
    top="0"
    left="0"
    right="0"
    bottom="0"
    pointerEvents="none"
    zIndex={1}
    overflow="hidden"
  >
    {/* Capa 1 de niebla - más suave */}
    <Box
      position="absolute"
      width="200%"
      height="100%"
      backgroundImage="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9Ii4wMDUiIG51bU9jdGF2ZXM9IjUiLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')"
      filter="blur(60px)"
      opacity="0.1"
      bgColor="red.600"
      mixBlendMode="multiply"
      animation={`${fogAnimation} 90s linear infinite, ${fadeInOut} 120s ease-in-out infinite`}
    />

    {/* Capa 2 de niebla - más intensa */}
    <Box
      position="absolute"
      width="200%"
      height="100%"
      backgroundImage="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9Ii4wMDUiIG51bU9jdGF2ZXM9IjUiLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')"
      filter="blur(50px)"
      opacity="0.2"
      bgColor="red.500"
      mixBlendMode="screen"
      animation={`${fogAnimation2} 70s linear infinite, ${fadeInOut} 150s ease-in-out infinite`}
    />

    {/* Capa 3 de niebla - movimientos más lentos y opacos */}
    <Box
      position="absolute"
      width="200%"
      height="100%"
      backgroundImage="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9Ii4wMDUiIG51bU9jdGF2ZXM9IjUiLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')"
      filter="blur(70px)"
      opacity="0.05"
      bgColor="red.400"
      mixBlendMode="lighten"
      animation={`${fogAnimation} 100s linear infinite`}
    />
  </Box>
);
