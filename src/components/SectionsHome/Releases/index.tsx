import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getUrl } from "../../../helpers/functions";
import { GridLayout, Section, Subtitle, Title } from "../../../styles/globals";
import theme from "../../../styles/theme";
import { CardNews } from "../../Cards/Release";
import { } from './styles'

export function Releases({ releases }) {
    return (
        <Section bg="#fff">
            <GridLayout p="2rem 0">
                <Title cl={theme.colors.gray_100} fz={"1.8rem"}>Destaques</Title>
                <Subtitle cl={theme.colors.gray_100} fz={"1rem"}>Conheça os melhores lançamentos de imóveis.</Subtitle>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView={'auto'}
                    navigation={true}
                >
                    {releases.map(release => (
                        <SwiperSlide>
                            <CardNews
                                src={getUrl(release.path)}
                            />
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </GridLayout>
        </Section>
    )
}