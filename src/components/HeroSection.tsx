import { Box, Heading, Text } from "@chakra-ui/react";

// Main hero section component
export default function HeroSection() {
  return (
    <Box
      backgroundImage="/Banner.png"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      h="350px"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-around"
      alignSelf="stretch"
    >
      <Box display="flex" flexDirection="column" margin={[2, 0]}>
        <Heading
          as="h1"
          color="light.headingAndText"
          fontWeight="500"
          lineHeight={["45px", "54px"]}
          fontSize={[30, 36]}
          mb={5}
        >
          5 Continentes,<br></br> infinitas possibilidades.
        </Heading>
        <Box>
          <Text
            color="light.headingAndText"
            fontWeight="400"
            fontSize={[14, 20]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}
