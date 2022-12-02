import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Container, Banner, Background, ContentBanner, Title, Subtitle, Tabs, Tab, Form, Type, ButtonScroll, Input, ButtonSubmit, BackgroundSection, ContentNews, LinkButton } from "./styles";
import { Card } from "../../components/Card";
import { InputSelect } from "../../components/InputSelect";
import { useSelect } from "../../hooks/useSelect";
import BackgroundBanner from "../../../public/images/banner-home2.jpg"
import { BsMouse } from "react-icons/bs";
import { Col, GridLayout, Row, Section } from "../../styles/globals";
import theme from "../../styles/theme";
import { CardCity } from "../../components/CardCity";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import { CardTypeProperty } from "../../components/CardTypeProperty";
import { CardAgents } from "../../components/CarAgents";

import Link from 'next/link';
import { CardNews } from "../../components/CardNews";

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
        <Container onScroll={() => alert('opa')}>
            <Banner ref={bannerRef}>
                <Background>
                    <Image src={BackgroundBanner} alt="banner" />
                </Background>
                <ContentBanner>
                    <Title>Seu imóvel está aqui!</Title>
                    <Subtitle>Escreva seu subtítulo aqui.</Subtitle>
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
                        <ButtonSubmit>Buscar</ButtonSubmit>
                    </Form>
                    <ButtonScroll onClick={handleScrollTo}>
                        <BsMouse />
                    </ButtonScroll>
                </ContentBanner>
            </Banner>
            <Section bg="#f9f9f9" p="0 0 2rem 0">
                <GridLayout
                    p="2rem 0"
                    ai="center"
                >
                    <Title cl={theme.colors.gray_100} fz={"1.8rem"}>Imóveis em destaque</Title>
                    <Subtitle cl={theme.colors.gray_100} fz={"1rem"}>Imóveis escolhidos a dedo por nossa equipe. </Subtitle>

                    <Section fd="row" gap="20px">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={'auto'}
                            navigation={true}

                            className="cardproperty"
                        >
                            <SwiperSlide><Card /></SwiperSlide>
                            <SwiperSlide><Card /></SwiperSlide>
                            <SwiperSlide><Card /></SwiperSlide>
                            <SwiperSlide><Card /></SwiperSlide>
                            <SwiperSlide><Card /></SwiperSlide>
                            <SwiperSlide><Card /></SwiperSlide>
                        </Swiper>
                    </Section>
                    <LinkButton href="/imoveis">Ver todos os imóveis</LinkButton>
                </GridLayout>
            </Section>
            <Section style={{ position: 'relative' }} h={'480px'}>
                <BackgroundSection>
                    <Image
                        src={BackgroundBanner}
                        alt={'banner'}
                    />
                </BackgroundSection>
                <GridLayout
                    p="2rem 0"
                    ai="center"
                >
                    <Title cl={theme.colors.white} fz={"1.8rem"}>O que você está procurando?</Title>
                    <Subtitle cl={theme.colors.white} fz={"1rem"}>Nós fornecemos serviço completo em cada etapa.</Subtitle>
                    <Row
                        bg={theme.colors.white}
                        h={"280px"}
                        br={theme.borders.border_m}
                        style={{ boxShadow: "0px 0px 50px 0px rgba(19, 19, 28, 0.12)" }}
                    >
                        <Col col={3}>
                            <CardTypeProperty
                                icon="fa-casa"
                                title="Casa"
                                subtitle="Aliquam dictum elit vitae mauris facilisis, at dictum urna."
                            />
                        </Col>
                        <Col col={3}>
                            <CardTypeProperty
                                icon="fa-apartamento"
                                title="Apartamento"
                                subtitle="Aliquam dictum elit vitae mauris facilisis, at dictum urna."
                            />
                        </Col>
                        <Col col={3}>
                            <CardTypeProperty
                                icon="fa-kitnet"
                                title="Kitnet"
                                subtitle="Aliquam dictum elit vitae mauris facilisis, at dictum urna."
                            />
                        </Col>
                        <Col col={3}>
                            <CardTypeProperty
                                icon="fa-fazenda"
                                title="Fazenda"
                                subtitle="Aliquam dictum elit vitae mauris facilisis, at dictum urna."
                            />
                        </Col>
                    </Row>
                </GridLayout>
            </Section>
            <Section>
                <GridLayout
                    p="2rem 0"
                    ai="center"
                >
                    <Title cl={theme.colors.gray_100} fz={"1.8rem"}>Encontre propriedades nessas cidades </Title>
                    <Subtitle cl={theme.colors.gray_100} fz={"1rem"}>O cliente é muito importante, o cliente será seguido pelo cliente</Subtitle>
                    <Row>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardCity />
                        </Col>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardCity />
                        </Col>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardCity />
                        </Col>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardCity />
                        </Col>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardCity />
                        </Col>
                        <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                            <CardCity />
                        </Col>
                    </Row>
                </GridLayout>
            </Section>
            <Section bg="#f9f9f9">
                <GridLayout
                    p="2rem 0"
                    ai="center"
                >
                    <Title cl={theme.colors.gray_100} fz={"1.8rem"}>Nossos Agentes</Title>
                    <Subtitle cl={theme.colors.gray_100} fz={"1rem"}>O cliente é muito importante, o cliente será seguido pelo cliente.</Subtitle>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        navigation={true}

                        className="cardproperty"
                    >
                        <SwiperSlide>
                            <CardAgents />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardAgents />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardAgents />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardAgents />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardAgents />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardAgents />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardAgents />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardAgents />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardAgents />
                        </SwiperSlide>
                    </Swiper>
                </GridLayout>
            </Section>


            <Section bg="#fff">
                <GridLayout p="2rem 0" ai="center">
                    <Title cl={theme.colors.gray_100} fz={"1.8rem"}>Lançamentos</Title>
                    <Subtitle cl={theme.colors.gray_100} fz={"1rem"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Subtitle>
                    <ContentNews>
                        <CardNews />
                        <CardNews />
                        <CardNews />
                        <CardNews />
                    </ContentNews>

                </GridLayout>
            </Section>
        </Container>
    )
}