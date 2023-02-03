import { FiChevronRight } from 'react-icons/fi'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GridLayout, Section, Subtitle, Title } from '../../../styles/globals'
import theme from '../../../styles/theme'
import { CardProperty } from '../../Cards/Property'
import { LinkButton, TopCard } from './styles'

export function Featured() {
    return (
        <Section bg="#f9f9f9" p="0 0 2rem 0">
            <GridLayout p="2rem 0">
                <TopCard>
                    <div>
                        <Title cl={theme.colors.gray_100} fz={"1.8rem"}>Imóveis em destaque</Title>
                        <Subtitle cl={theme.colors.gray_100} fz={"1rem"}>
                            Excelentes imóveis disponíveis para você conhecer.
                            <LinkButton href="/imoveis">Ver todos<FiChevronRight /></LinkButton>
                        </Subtitle>
                    </div>
                </TopCard>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={18}
                    slidesPerView={'auto'}
                    navigation={true}
                    className="cardproperty"
                >
                    <SwiperSlide>
                        <CardProperty
                            src="https://amimoveiscatalao.com.br/painel/upload/imoveis/20221214120837_44704.jpg"
                            forSell={true}
                            price="570.000,00"
                            title="Nossa Senhora de Fátima"
                            city="Catalão"
                            bed="3"
                            bath="2"
                            car="2"
                            area="138"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProperty
                            src="https://amimoveiscatalao.com.br/painel/upload/imoveis/20221230090034_52430.jpg"
                            forSell={true}
                            price="570.000,00"
                            title="Ipanema"
                            city="Catalão"
                            bed="3"
                            bath="2"
                            car="2"
                            area="138"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProperty
                            src="https://amimoveiscatalao.com.br/painel/upload/imoveis/20221221152839_04820.jpg"
                            forRent={true}
                            price="570.000,00"
                            title="Jardim Florença"
                            city="Catalão"
                            bed="3"
                            bath="2"
                            car="2"
                            area="138"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProperty
                            src="https://amimoveiscatalao.com.br/painel/upload/imoveis/20221214120837_44704.jpg"
                            forSell={true}
                            price="570.000,00"
                            title="Nossa Senhora de Fátima"
                            city="Catalão"
                            bed="3"
                            bath="2"
                            car="2"
                            area="138"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProperty
                            src="https://amimoveiscatalao.com.br/painel/upload/imoveis/20221230090034_52430.jpg"
                            forSell={true}
                            price="570.000,00"
                            title="Ipanema"
                            city="Catalão"
                            bed="3"
                            bath="2"
                            car="2"
                            area="138"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProperty
                            src="https://amimoveiscatalao.com.br/painel/upload/imoveis/20221221152839_04820.jpg"
                            forRent={true}
                            price="570.000,00"
                            title="Jardim Florença"
                            city="Catalão"
                            bed="3"
                            bath="2"
                            car="2"
                            area="138"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProperty
                            src="https://amimoveiscatalao.com.br/painel/upload/imoveis/20221214120837_44704.jpg"
                            forSell={true}
                            price="570.000,00"
                            title="Nossa Senhora de Fátima"
                            city="Catalão"
                            bed="3"
                            bath="2"
                            car="2"
                            area="138"
                        />
                    </SwiperSlide>
                </Swiper>
            </GridLayout>
        </Section>
    )
}