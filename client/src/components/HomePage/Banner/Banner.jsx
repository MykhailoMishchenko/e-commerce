import React from "react";
import "../../../styles/swiper-bundle.css";
import styles from "./Banner.module.scss";
import FlexRow from "../../../ui/Flex/FlexRow/FlexRow";
import Container from "../../../ui/Container/Container";
import {CONTAINER_WIDTH} from "../../../constans";
import Block from "../../../ui/Block/Block";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay} from "swiper/core";
// import bannerWoman from "../../../assets/mock/banner-woman.jpeg";
// import bannerMan from " ../../../assets/mock/banner-man.jpeg";
// import bannerAccessories from "../../../assets/mock/accessories.svg";
import woman from "../../../assets/mock/banner-woman.jpeg"
import man from "../../../assets/mock/banner-man.jpeg"
import accessories from "../../../assets/mock/accessories.svg"
import one from "../../../assets/slider/test.JPG";
import two from "../../../assets/slider/slider-1.jpeg";
import tree from "../../../assets/slider/slider-2.jpeg";
import four from "../../../assets/slider/slider-4.jpeg";
import five from "../../../assets/slider/slider-5.jpeg";
import FlexColumn from "../../../ui/Flex/FlexColumn/FlexColumn";

SwiperCore.use([Autoplay]);

const Banner = () => {

  const data = [
    {id: "1", src: one, desc: "Нова Колекція!"},
    {id: "2", src: two, desc: "Нова Колекція!"},
    {id: "3", src: tree, desc: "Нова Колекція!"},
    {id: "4", src: four, desc: "Нова Колекція!"},
    {id: "5", src: five, desc: "Нова Колекція!"}
  ];

  const banners = [
    {id: "1", link: "/women", title: "Жінкам", src: woman, desc: "Для Жінок"},
    {id: "2", link: "/men", title: "Чоловікам", src: man, desc: "Для Чоловіків"},
    {id: "3", link: "/accessories", title: "Аксесуари", src: accessories, desc: "Аксесуари"},
  ]

  return (
    <Container width={CONTAINER_WIDTH}>
      <FlexRow position="between" optionalStyle={styles.wrapper}>
        <Block size="lg" optional={styles.blockLg}>
          <Swiper id="main" className={styles.swiper} loop autoplay>
            {data.map(slide => {
              return (
                <SwiperSlide key={slide.id}>
                  <img src={slide.src} alt={slide.desc} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <h3>Нова Колекція</h3>
        </Block>
        <FlexColumn gap="30">
          <FlexRow position="between" gap="30" wrap>
            {
              banners.slice(0,2).map(banner => (
                <Block key={banner.id} size="sm" to={banner.link} optional={styles.blockSm}>
                  <img src={banner.src} alt={banner.desc} />
                  <h3>{banner.title}</h3>
                </Block>
              ))
            }
          </FlexRow>
          {
            banners.slice(2).map(banner => (
              <Block key={banner.id} size="md" optional={styles.blockLg}>
                <img src={banner.src} alt={banner.desc} />
                <h3>{banner.title}</h3>
              </Block>
            ))
          }
        </FlexColumn>
      </FlexRow>
    </Container>
  );
};

export default Banner;
