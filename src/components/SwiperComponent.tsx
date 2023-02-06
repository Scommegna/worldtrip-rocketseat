import { Swiper, SwiperSlide } from "swiper/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { Button, Center, Heading, HStack, Stack, Text } from "@chakra-ui/react";

export default function SwiperComponent() {
  return (
    <Center
      as={Swiper}
      margin="0 auto"
      w="70%"
      h="450px"
      mb={10}
      slidesPerView={3}
      spaceBetween={50}
      onSlideChange={() => console.log("changed")}
      onSwiper={(swiper: any) => console.log(swiper)}
    >
      <Center
        as={SwiperSlide}
        backgroundImage="/Europa/Continent-Image.png"
        w="100%"
        h="100%"
      >
        <HStack justifyContent="space-between" w="100%">
          <Button
            leftIcon={
              <ChevronLeftIcon
                color="highlight"
                boxSize="80px"
                _hover={{ color: "light.white", transition: "0.3s" }}
              />
            }
            colorScheme="light.white"
          />
          <Stack textAlign="center" spacing="16px">
            <Heading
              fontSize="48px"
              fontWeight="700"
              color="light.headingAndText"
            >
              Europa
            </Heading>
            <Text color="light.headingAndText" fontWeight="700" fontSize="24px">
              O Continente mais antigo.
            </Text>
          </Stack>
          <Button
            rightIcon={
              <ChevronRightIcon
                color="highlight"
                boxSize="80px"
                _hover={{ color: "light.white", transition: "0.3s" }}
              />
            }
            colorScheme="light.white"
          />
        </HStack>
      </Center>
    </Center>
  );
}
