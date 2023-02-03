import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { GridLayout, Section, Subtitle, Title } from "../../../styles/globals";
import theme from "../../../styles/theme";
import { CardAgents } from "../../Cards/Broker";
import { } from './styles'

export function Brokers() {
    return (
        <Section bg="#f9f9f9">
            <GridLayout p="2rem 0">
                <Title cl={theme.colors.gray_100} fz={"1.8rem"}>Nossos corretores</Title>
                <Subtitle cl={theme.colors.gray_100} fz={"1rem"}>Equipe especializada pronta para te atender.</Subtitle>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={18}
                    slidesPerView={'auto'}
                    navigation={true}
                    className="cardproperty"
                >
                    <SwiperSlide>
                        <CardAgents
                            src="https://creativelayers.net/themes/findhouse-html/images/team/6.jpg"
                            title="Sebastiana Oliveira"
                            subtitle="Especialista em vendas"

                            whatsapp="www.whatsapp.com.br"
                            facebook="www.facebook.com.br"
                            instagram="www.instagram.com.br"
                            youtube="www.youtube.com.br"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardAgents
                            src="https://creativelayers.net/themes/findhouse-html/images/team/10.jpg"
                            title="Sebastião Ferreira"
                            subtitle="Especialista em aluguéis"

                            whatsapp="www.whatsapp.com.br"
                            facebook="www.facebook.com.br"
                            instagram="www.instagram.com.br"
                            youtube="www.youtube.com.br"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardAgents
                            src="https://creativelayers.net/themes/findhouse-html/images/team/8.jpg"
                            title="Maria Silveira"
                            subtitle="Especialista em vendas"

                            whatsapp="www.whatsapp.com.br"
                            facebook="www.facebook.com.br"
                            instagram="www.instagram.com.br"
                            youtube="www.youtube.com.br"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardAgents
                            src="https://creativelayers.net/themes/findhouse-html/images/team/6.jpg"
                            title="Sebastiana Oliveira"
                            subtitle="Especialista em vendas"

                            whatsapp="www.whatsapp.com.br"
                            facebook="www.facebook.com.br"
                            instagram="www.instagram.com.br"
                            youtube="www.youtube.com.br"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardAgents
                            src="https://creativelayers.net/themes/findhouse-html/images/team/10.jpg"
                            title="Sebastião Ferreira"
                            subtitle="Especialista em aluguéis"

                            whatsapp="www.whatsapp.com.br"
                            facebook="www.facebook.com.br"
                            instagram="www.instagram.com.br"
                            youtube="www.youtube.com.br"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardAgents
                            src="https://creativelayers.net/themes/findhouse-html/images/team/8.jpg"
                            title="Maria Silveira"
                            subtitle="Especialista em vendas"

                            whatsapp="www.whatsapp.com.br"
                            facebook="www.facebook.com.br"
                            instagram="www.instagram.com.br"
                            youtube="www.youtube.com.br"
                        />
                    </SwiperSlide>
                </Swiper>
            </GridLayout>
        </Section>
    )
}