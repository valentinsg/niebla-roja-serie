import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const fogAnimation = keyframes`
  0% {
    transform: translateX(-100%) translateY(0);
  }
  100% {
    transform: translateX(100%) translateY(-20%);
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
    <Box
      position="absolute"
      width="200%"
      height="100%"
      backgroundImage="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9Ii4wMDUiIG51bU9jdGF2ZXM9IjUiLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')"
      filter="blur(50px)"
      opacity="0.15"
      bgColor="red.600"
      mixBlendMode="multiply"
      animation={`${fogAnimation} 60s linear infinite`}
    />
  </Box>
);
