import Image from "next/image";
import Link from 'next/link';

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

import { BsMouse } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import BackgroundBanner from "../../../public/images/banner-home3.jpg"
import CaixaAqui from "../../../public/images/caixa.svg"

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
                    <Subtitle ai="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Subtitle>
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
                        <ButtonSubmit><BiSearch /> Buscar</ButtonSubmit>
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
                            <Subtitle cl={theme.colors.gray_100} fz={"1rem"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Subtitle>
                        </div>
                    </TopCard>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        navigation={true}
                        className="cardproperty"
                    >
                        <SwiperSlide><CardProperty /></SwiperSlide>
                        <SwiperSlide><CardProperty /></SwiperSlide>
                        <SwiperSlide><CardProperty /></SwiperSlide>
                        <SwiperSlide><CardProperty /></SwiperSlide>
                        <SwiperSlide><CardProperty /></SwiperSlide>
                        <SwiperSlide><CardProperty /></SwiperSlide>
                    </Swiper>

                    <LinkButton href="/imoveis">Ver todos imóveis</LinkButton>
                </GridLayout>
            </Section>

            <Section style={{ position: 'relative' }}>
                <BackgroundSection>
                    <Image src={BackgroundBanner} alt={'banner'} />
                </BackgroundSection>

                <GridLayout p="3rem 0 2rem 0" ai="center">
                    <Title cl={theme.colors.white} fz={"1.8rem"}>O que você está procurando?</Title>
                    <Subtitle cl={theme.colors.white} fz={"1rem"} ai="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Subtitle>

                    <TypePropertyContent style={{ boxShadow: "0px 0px 50px 0px rgba(19, 19, 28, 0.12)" }} >
                        <div>
                            <CardTypeProperty
                                icon="fa-casa"
                                title="Casa"
                                subtitle="Aliquam dictum elit vitae mauris facilisis, at dictum urna."
                            />
                            <CardTypeProperty
                                icon="fa-apartamento"
                                title="Apartamento"
                                subtitle="Aliquam dictum elit vitae mauris facilisis urna."
                            />
                        </div>
                        <div>
                            <CardTypeProperty
                                icon="fa-kitnet"
                                title="Kitnet"
                                subtitle="Dictum elit vitae mauris, at dictum urna."
                            />
                            <CardTypeProperty
                                icon="fa-fazenda"
                                title="Fazenda"
                                subtitle="Dictum elit vitae mauris at dictum facilisis."
                            />
                        </div>
                    </TypePropertyContent>
                </GridLayout>
            </Section>

            <Section>
                <GridLayout p="2rem 0" ai="center">
                    <Title cl={theme.colors.gray_100} fz={"1.8rem"}>Encontre nestas localidades</Title>
                    <Subtitle cl={theme.colors.gray_100} fz={"1rem"} ai="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Subtitle>
                    <Row>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardLocality Title1="Nossa Senhora de Fátima" />
                        </Col>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardLocality Title1="Nossa Senhora de Fátima" />
                        </Col>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardLocality Title1="Nossa Senhora de Fátima" />
                        </Col>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardLocality Title1="Nossa Senhora de Fátima" />
                        </Col>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardLocality Title1="Nossa Senhora de Fátima" />
                        </Col>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardLocality Title1="Todos os bairros" />
                        </Col>
                    </Row>
                </GridLayout>
            </Section>

            <Section bg="#f9f9f9">
                <GridLayout p="2rem 0">
                    <Title cl={theme.colors.gray_100} fz={"1.8rem"}>Nossos corretores</Title>
                    <Subtitle cl={theme.colors.gray_100} fz={"1rem"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Subtitle>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        navigation={true}
                        className="cardproperty"
                    >
                        <SwiperSlide><CardAgents /></SwiperSlide>
                        <SwiperSlide><CardAgents /></SwiperSlide>
                        <SwiperSlide><CardAgents /></SwiperSlide>
                        <SwiperSlide><CardAgents /></SwiperSlide>
                        <SwiperSlide><CardAgents /></SwiperSlide>
                        <SwiperSlide><CardAgents /></SwiperSlide>
                        <SwiperSlide><CardAgents /></SwiperSlide>
                    </Swiper>
                </GridLayout>
            </Section>

            <Section bg="#fff">
                <GridLayout p="2rem 0">
                    <Title cl={theme.colors.gray_100} fz={"1.8rem"}>Lançamentos</Title>
                    <Subtitle cl={theme.colors.gray_100} fz={"1rem"} >Lorem ipsum dolor sit amet, consectetur adipiscing elit</Subtitle>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        navigation={true}
                        className="cardproperty"
                    >
                        <SwiperSlide><CardNews /></SwiperSlide>
                        <SwiperSlide><CardNews /></SwiperSlide>
                        <SwiperSlide><CardNews /></SwiperSlide>
                        <SwiperSlide><CardNews /></SwiperSlide>
                    </Swiper>
                </GridLayout>
            </Section>
        </>
    )
}