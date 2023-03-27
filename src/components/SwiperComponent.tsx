import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { Center } from "@chakra-ui/react";
import SlideComponent from "./SlideComponent";

// Slider component using Swiper
export default function SwiperComponent() {
  return (
    <>
      <Center
        as={Swiper}
        margin="0 auto"
        w={["100%", "70%"]}
        h="450px"
        mb={10}
        slidesPerView={1}
        spaceBetween={50}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <SlideComponent id="Europa" description="O Continente mais antigo." />
        </SwiperSlide>
        <SwiperSlide>
          <SlideComponent id="Africa" description="O Continente das savanas." />
        </SwiperSlide>
        <SwiperSlide>
          <SlideComponent
            id="America"
            description="O Continente mais brasileiro."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideComponent
            id="Asia"
            description="O Continente mais tecnológico."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideComponent
            id="Antartida"
            description="O Continente mais frio."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideComponent id="Oceania" description="O continente de ilhas." />
        </SwiperSlide>
      </Center>
    </>
  );
}
