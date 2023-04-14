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
          gap={["30px", "40px", "50px", "60px", "104px"]}
          alignItems="center"
          margin={[
            "5px 5px 5px 5px",
            "5px 5px 5px 5px",
            "10px 10px 10px 10px",
            "15px 15px 15px 15px",
            "20px 20px 20px 20px",
          ]}
          justifyContent="center"
        >
          <VStack spacing="12px" alignItems="start">
            <Heading
              fontWeight="600"
              fontSize="20px"
              color="dark.headingAndText"
            >
              {city}
            </Heading>
            <Text color="dark.info" fontWeight="500" fontSize="16px">
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
