import {
  Box,
  Container,
  Heading,
  HStack,
  Image as ChakraImage,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

import InfoLogo from "../../../public/Info.svg";
import Image from "next/image";

import { useRouter } from "next/router";
import CardComponent from "@/src/components/CardComponent";

// Dynamic page for continents
export default function CountryPage() {
  const router = useRouter();
  const { id } = router.query;

  const isWide = useBreakpointValue({
    sm: false,
    md: false,
    lg: false,
    xl: true,
  });

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
          top={isWide ? "75%" : "50%"}
          left={isWide ? "6%" : "50%"}
          transform={isWide ? "" : "translate(-50%, -50%)"}
          color="light.headingAndText"
          fontSize={48}
        >
          {id}
        </Text>
      </Container>
      <Stack
        maxWidth="100%"
        spacing="72px"
        direction={isWide ? "row" : "column"}
      >
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
          <HStack
            spacing="42px"
            alignSelf={isWide ? "" : "center"}
            justifyContent={isWide ? "" : "space-around"}
          >
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
                <Tooltip label="Learn more">
                  <ChakraImage
                    as={Image}
                    src={InfoLogo}
                    display="inline-block"
                    marginLeft="7px"
                    cursor="pointer"
                    alt="more info"
                  />
                </Tooltip>
              </Text>
            </VStack>
          </HStack>
        </Container>
      </Stack>
      <Box textAlign="left" maxWidth="80%">
        <Heading
          fontWeight="500"
          fontSize="36px"
          display="inline-block"
          marginBottom="40px"
        >
          Cidades +100
        </Heading>
        <SimpleGrid columns={isWide ? 4 : 1} spacing="45px">
          <CardComponent
            id={`${id}`}
            imageNumber="1"
            city="Londres"
            country="Reino Unido"
          />
          <CardComponent
            id={`${id}`}
            imageNumber="2"
            city="Paris"
            country="França"
          />
          <CardComponent
            id={`${id}`}
            imageNumber="3"
            city="Roma"
            country="Itália"
          />
          <CardComponent
            id={`${id}`}
            imageNumber="4"
            city="Praga"
            country="República Tcheca"
          />
          <CardComponent
            id={`${id}`}
            imageNumber="5"
            city="Amsterdã"
            country="Holanda"
          />
        </SimpleGrid>
      </Box>
    </VStack>
  );
}

// ../../../public/${id}/PageAssets/1.png

// Primeira coisa: arrumar os cards, já estão bugados, ajustar valores de gaps e margins de acordo com breakpoints diferentes
// Para um breakpoint de 1000px já da para mudar o layout para mobile
