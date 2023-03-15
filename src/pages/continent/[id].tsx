import {
  Box,
  Card,
  Container,
  Heading,
  HStack,
  Image as ChakraImage,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import InfoLogo from "../../../public/Info.svg";
import Image from "next/image";

import { useRouter } from "next/router";

// Dynamic page for continents
export default function CountryPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <VStack as="main" spacing="80px">
      <Container maxWidth="100%" padding="0" position="relative">
        <ChakraImage
          src={`/${id}/PageAssets/1.png`}
          width="100%"
          alt={`${id} Image`}
        />
        <Text
          position="absolute"
          top="75%"
          left="6%"
          color="light.headingAndText"
          fontSize="48px"
        >
          {id}
        </Text>
      </Container>
      <HStack maxWidth="100%" spacing="72px">
        <Container>
          <Text
            color="dark.headingAndText"
            fontSize="24px"
            fontWeight="400"
            lineHeight="36px"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dicta
            odit quam ex totam et, illo est. At incidunt iste voluptatum.
            Explicabo exercitationem veritatis provident sit dolorum quos,
            accusamus dolor?
          </Text>
        </Container>
        <Container>
          <HStack spacing="42px">
            <VStack spacing="-10px">
              <Text color="highlight" fontSize="48px" fontWeight="600">
                50
              </Text>
              <Text fontWeight="600" color="dark.black" fontSize="24px">
                Países
              </Text>
            </VStack>
            <VStack spacing="-10px">
              <Text color="highlight" fontSize="48px" fontWeight="600">
                60
              </Text>
              <Text fontWeight="600" color="dark.black" fontSize="24px">
                Línguas
              </Text>
            </VStack>
            <VStack spacing="-10px">
              <Text color="highlight" fontSize="48px" fontWeight="600">
                27
              </Text>
              <Text fontWeight="600" color="dark.black" fontSize="24px">
                Cidades +100
                <ChakraImage
                  as={Image}
                  src={InfoLogo}
                  display="inline-block"
                  marginLeft="7px"
                />
              </Text>
            </VStack>
          </HStack>
        </Container>
      </HStack>
      <Box textAlign="left" maxWidth="80%">
        <Heading fontWeight="500" fontSize="36px">
          Cidades +100
        </Heading>
        <SimpleGrid columns={4} spacing="45px">
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
      </Box>
    </VStack>
  );
}

// ../../../public/${id}/PageAssets/1.png
