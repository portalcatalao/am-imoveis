import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getUrl } from "../../../helpers/functions";
import { GridLayout, Section, Subtitle, Title } from "../../../styles/globals";
import theme from "../../../styles/theme";
import { CardAgents } from "../../Cards/Broker";
import { } from './styles'

export function Brokers({ realtors }) {
    return (
        <Section bg="#f9f9f9">
            <GridLayout p="2rem 0">
                <Title cl={theme.colors.gray_100} fz={"1.8rem"}>Corretores</Title>
                <Subtitle cl={theme.colors.gray_100} fz={"1rem"}>Nossa equipe especializada pronta para te atender</Subtitle>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={18}
                    slidesPerView={'auto'}
                    navigation={true}
                    className="cardproperty"
                >
                    {realtors.map(realtor =>
                        <SwiperSlide>
                            <CardAgents
                                id={realtor.id}
                                src={getUrl(realtor.avatar)}
                                title={realtor.name}
                                subtitle="Especialista"
                                whatsapp={realtor.cellPhone}
                                facebook="www.facebook.com.br"
                                instagram="www.instagram.com.br"
                                youtube="www.youtube.com.br"
                            />
                        </SwiperSlide>)
                    }
                </Swiper>
            </GridLayout>
        </Section>
    )
}