import { Center, Heading, Stack, Text } from "@chakra-ui/react";

import Link from "next/link";

interface SlideComponentProps {
  id: string;
  description: string;
}

// Slide component created by given info
export default function SlideComponent({
  id,
  description,
}: SlideComponentProps) {
  return (
    <Link href={`/pages/continent/${id}`}>
      <Center
        backgroundImage={`/${id}/Continent-Image.png`}
        backgroundSize="cover"
        w="100%"
        h="100%"
      >
        <Stack textAlign="center" spacing="16px">
          <Heading
            fontSize="48px"
            fontWeight="700"
            color="light.headingAndText"
          >
            {id}
          </Heading>
          <Text color="light.headingAndText" fontWeight="700" fontSize="24px">
            {description}
          </Text>
        </Stack>
      </Center>
    </Link>
  );
}
