import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { GridLayout, Section, Subtitle, Title } from "../../../styles/globals";
import theme from "../../../styles/theme";
import { CardNews } from "../../Cards/News";
import { } from './styles'

export function News() {
    return (
        <Section bg="#fff">
            <GridLayout p="2rem 0">
                <Title cl={theme.colors.gray_100} fz={"1.8rem"}>Lançamentos</Title>
                <Subtitle cl={theme.colors.gray_100} fz={"1rem"}>Conheça os melhores lançamentos de imóveis.</Subtitle>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView={'auto'}
                    navigation={true}
                    className="cardproperty"
                >
                    <SwiperSlide>
                        <CardNews
                            src="https://amimoveiscatalao.com.br/painel/upload/temp/8bdcbbdad6957abc5bd7142db906a04e.jpg"
                            title="Paulo Hummel Residencial Park"
                            description="Área de lazer com playground, piscina com sauna, academia, pergolado, salão de jogos, 
                        dois salões de festas."
                        />

                    </SwiperSlide>
                    <SwiperSlide>
                        <CardNews
                            src="https://amimoveiscatalao.com.br/painel/upload/temp/a9f2fc851c70cef064c44b0468fa7556.jpg"
                            title="Paulo Hummel Residencial"
                            description="Área de lazer com playground, piscina com sauna, academia, pergolado, salão de jogos, 
                        dois salões de festas."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardNews
                            src="https://amimoveiscatalao.com.br/painel/upload/temp/a55d71df8453ebb2a9374e2d065f3481.jpg"
                            title="Paulo Hummel Residencial"
                            description="Área de lazer com playground, piscina com sauna, academia, pergolado, salão de jogos, 
                        dois salões de festas."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardNews
                            src="https://www.carpemundi.com.br/wp-content/uploads/2020/07/melhores-resorts-brasil.jpg"
                            title="Resort Trend Residencial"
                            description="Área de lazer com playground, piscina com sauna, academia, pergolado, salão de jogos, 
                        dois salões de festas."
                        />
                    </SwiperSlide>
                </Swiper>
            </GridLayout>
        </Section>
    )
}