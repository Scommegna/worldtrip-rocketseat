import {
  Card,
  CardBody,
  Heading,
  HStack,
  Text,
  VStack,
  Image as ChakraImage,
} from "@chakra-ui/react";

interface CardComponentProps {
  id: string;
  imageNumber: string;
  city: string;
  country: string;
}

// Card component used in dynamic id page
export default function CardComponent({
  id,
  imageNumber,
  city,
  country,
}: CardComponentProps) {
  return (
    <Card borderColor="highlight">
      <CardBody padding="0">
        <ChakraImage
          w="100%"
          src={`/${id}/PageAssets/Card${imageNumber}.png`}
          marginBottom="18px"
          alt={`${city} Image`}
        />
        <HStack
          gap="104px"
          alignItems="baseline"
          marginRight="24px"
          marginBottom="24px"
          marginLeft="24px"
        >
          <VStack spacing="12px" alignItems="start">
            <Heading
              fontWeight="600"
              fontSize="20px"
              color="dark.headingAndText"
            >
              {city}
            </Heading>
            <Text
              color="dark.info"
              fontWeight="500"
              fontSize="16px"
              // whiteSpace="nowrap"
            >
              {country}
            </Text>
          </VStack>

          <ChakraImage
            src={`/${id}/PageAssets/Elipse${imageNumber}.png`}
            alignSelf="center"
            alt={`${country} flag Image`}
          />
        </HStack>
      </CardBody>
    </Card>
  );
}
