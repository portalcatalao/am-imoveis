import Image from 'next/image';
import { createGlobalStyle } from 'styled-components'
import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { GridLayout } from '../../styles/globals';
import { Container, Thumbnail } from './styles'

import styles from './styles.module.scss'

export function GalleryView() {
    const GlobalStyles = createGlobalStyle`
        html {
            overflow: hidden!important;
        }
    `;

    return (
        <Container>
            <GlobalStyles />

            <GridLayout
                style={{ display: "flex", alignItems: "center" }}
            >
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    id={styles.swiper}
                >
                    <SwiperSlide id={styles.swiper_slide}>
                        <Thumbnail>
                            <Image
                                src={"https://creativelayers.net/themes/findhouse-html/images/property/fp21.jpg"}
                                alt=""
                                height={600}
                                width={600}
                            />
                        </Thumbnail>
                    </SwiperSlide>
                    <SwiperSlide id={styles.swiper_slide}>
                        <Thumbnail>
                            <Image
                                src={"https://creativelayers.net/themes/findhouse-html/images/property/fp21.jpg"}
                                alt=""
                                height={600}
                                width={600}
                            />
                        </Thumbnail>
                    </SwiperSlide>
                    <SwiperSlide id={styles.swiper_slide}>
                        <Thumbnail>
                            <Image
                                src={"https://creativelayers.net/themes/findhouse-html/images/property/fp21.jpg"}
                                alt=""
                                height={600}
                                width={600}
                            />
                        </Thumbnail>
                    </SwiperSlide>

                </Swiper>
            </GridLayout>
        </Container>
    )
}