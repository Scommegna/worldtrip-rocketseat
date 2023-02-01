import { Box, Heading, Text } from "@chakra-ui/react";

// Main hero section component
export default function HeroSection() {
  return (
    <Box
      backgroundImage="/Banner.png"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      maxW="100%"
      h="65vh"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-around"
    >
      <Box display="flex" flexDirection="column">
        <Heading
          as="h1"
          color="light.headingAndText"
          fontWeight="500"
          lineHeight="54px"
          fontSize="2.25rem"
        >
          5 Continentes,<br></br> infinitas possibilidades.
        </Heading>
        <Box>
          <Text color="light.headingAndText" fontWeight="400" fontSize={20}>
            Chegou a hora de tirar do papel a viagem que você<br></br> sempre
            sonhou.
          </Text>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}
