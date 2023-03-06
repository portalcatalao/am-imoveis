import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Container, ButtonClose } from "./styles";
import styles from "./styles.module.scss";
import { GridLayout } from "../../styles/globals";
import { Slide } from "./components/Slide";
import { PrevButton } from "./components/PrevButton";
import { NextButton } from "./components/NextButton";
import { FiX } from "react-icons/fi";
import { HandleIndex } from "./components/HandleIndex";

export function GalleryView({ close, active, show, images }) {
    const [state, setState] = useState('start');
    const GlobalStyle = createGlobalStyle`
        html {
            overflow-y: hidden !important;
        }
    `
    return (
        <Container style={{
            visibility: !show ? 'hidden' : 'visible'
        }}>
            {show && <GlobalStyle />}
            <ButtonClose onClick={close}><FiX /></ButtonClose>
            <GridLayout style={{
                display: "flex",
                alignItems: "center"
            }}>
                <Swiper
                    id={styles.swiper}
                    pagination={{
                        type: "fraction",
                    }}
                    modules={[Pagination, Navigation]}
                    onSlideChange={(swiper) => {
                        { swiper.isBeginning && setState('start') }
                        { swiper.isEnd && setState('end') }
                        { !swiper.isBeginning && !swiper.isEnd && setState('progress') }
                    }}
                >
                    <HandleIndex active={active} show={show} />
                    {images.map((item, index) => (
                        <SwiperSlide key={index} id={styles.swiper_slide}>
                            <Slide image={item} />
                        </SwiperSlide>
                    ))}
                    <PrevButton disabled={state === 'start' && true} />
                    <NextButton disabled={state === 'end' || images.length < 2 ? true : false} />
                </Swiper>
            </GridLayout>
        </Container>
    )
}