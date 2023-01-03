import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { CardProperty } from "../../components/CardProperty";
import { CardLocality } from "../../components/CardLocality";
import { CardTypeProperty } from "../../components/CardTypeProperty";
import { CardAgents } from "../../components/CardAgents";
import { CardNews } from "../../components/CardNews";
import { InputSelect } from "../../components/InputSelect";
import { useSelect } from "../../hooks/useSelect";

import theme from "../../styles/theme";
import { Col, GridLayout, Row, Section } from "../../styles/globals";

import {
    Banner, Background, ContentBanner, TitleMain, Title, Subtitle, Tabs,
    Tab, Form, Type, ButtonScroll, Input, ButtonSubmit, BackgroundSection, LinkButton,
    TypePropertyContent,
    TopCard
} from "./styles";

import { BsMouse, BsChevronRight } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import CaixaAqui from "../../../public/images/caixa.svg"
import BackgroundBanner from "../../../public/images/banner-home3.jpg"
import Banner1 from "../../../public/images/banner-home1.jpg"
import Banner2 from "../../../public/images/banner-home1.jpg"
import Banner3 from "../../../public/images/banner-home1.jpg"
import Banner4 from "../../../public/images/banner-home1.jpg"
import Banner5 from "../../../public/images/banner-home1.jpg"
import Banner6 from "../../../public/images/banner-home1.jpg"
import { FiChevronRight } from "react-icons/fi";

export function Home() {
    const [bannerHeight, setBannerHeight] = useState(0);
    const bannerRef = useRef(null);
    const [adTypeActive, setAdTypeActive] = useState(0);
    const adType = useSelect();

    const handleScrollTo = (e) => {
        const body = document.querySelector('div.body');
        body.scrollTo({ top: bannerHeight - 72 });
    }

    useEffect(() => {
        setBannerHeight(bannerRef.current.offsetHeight)
    }, []);

    return (
        <>
            <Banner ref={bannerRef}>
                <Background>
                    <Image src={BackgroundBanner} alt="banner" />
                </Background>
                <ContentBanner>
                    <Image src={CaixaAqui} alt="Caixa Aqui" />

                    <TitleMain>Seu imóvel está aqui!</TitleMain>
                    <Subtitle ai="center">Os melhores imóveis para você escolher!</Subtitle>
                    <Tabs>
                        <Tab active={adTypeActive === 0} onClick={() => setAdTypeActive(0)}>Comprar</Tab>
                        <Tab active={adTypeActive === 1} onClick={() => setAdTypeActive(1)}>Alugar</Tab>
                    </Tabs>
                    <Form>
                        <Type>
                            <InputSelect
                                placeholder="Tipo de imóvel"
                                {...adType}
                            />
                        </Type>
                        <Input placeholder="Pesquise por bairro, cidade ou código" />
                        <ButtonSubmit><BiSearch />Buscar</ButtonSubmit>
                    </Form>
                    <ButtonScroll onClick={handleScrollTo}>
                        <BsMouse />
                    </ButtonScroll>
                </ContentBanner>
            </Banner>

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

            <Section style={{ position: 'relative' }}>
                <BackgroundSection>
                    <Image src={BackgroundBanner} alt={'banner'} />
                </BackgroundSection>

                <GridLayout p="3rem 0 2rem 0" ai="center">
                    <Title cl={theme.colors.white} fz={"1.8rem"}>O que você está procurando?</Title>
                    <Subtitle cl={theme.colors.white} fz={"1rem"} ai="center">Encontre o imóvel que você está procurando.</Subtitle>
                    <TypePropertyContent style={{ boxShadow: "0px 0px 50px 0px rgba(19, 19, 28, 0.12)" }} >
                        <div>
                            <CardTypeProperty
                                icon="fa-casa"
                                title="Casa"
                                subtitle="Imóveis tradicionais que oferecem mais privacidade."
                            />
                            <CardTypeProperty
                                icon="fa-apartamento"
                                title="Apartamento"
                                subtitle="Imóveis que oferecem praticidade e segurança."
                            />
                        </div>
                        <div>
                            <CardTypeProperty
                                icon="fa-kitnet"
                                title="Kitnet"
                                subtitle="Imovéis que atendem suas necessidades básicas."
                            />
                            <CardTypeProperty
                                icon="fa-fazenda"
                                title="Fazenda"
                                subtitle="Imóveis que te proporcionam contato direto com a natureza."
                            />
                        </div>
                    </TypePropertyContent>
                </GridLayout>
            </Section>

            <Section>
                <GridLayout p="2rem 0" ai="center">
                    <Title cl={theme.colors.gray_100} fz={"1.8rem"}>Encontre seu imóvel nestes bairros</Title>
                    <Subtitle cl={theme.colors.gray_100} fz={"1rem"} ai="center">Encontre o imóvel perfeito para você no bairro que desejar.</Subtitle>
                    <Row>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardLocality
                                src={Banner1}
                                title="Nossa Senhora de Fátima"
                                subtitle="24 propriedades"
                            />
                        </Col>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardLocality
                                src={Banner2}
                                title="Castelo Branco I"
                                subtitle="24 propriedades"
                            />
                        </Col>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardLocality
                                src={Banner3}
                                title="Alto da Boa Vista II"
                                subtitle="24 propriedades"
                            />
                        </Col>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardLocality
                                src={Banner4}
                                title="Ipanema"
                                subtitle="24 propriedades"
                            />
                        </Col>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardLocality
                                src={Banner5}
                                title="Jardim Paraíso"
                                subtitle="24 propriedades"
                            />
                        </Col>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardLocality
                                src={Banner6}
                                title="Todos os bairros"
                                subtitle="240 propriedades"
                            />
                        </Col>
                    </Row>
                </GridLayout>
            </Section>

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
                    </Swiper>
                </GridLayout>
            </Section>

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
        </>
    )
}