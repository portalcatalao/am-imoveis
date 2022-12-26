import Image from "next/image";
import { GridLayout, Section } from "../../styles/globals";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { FaBath, FaCar } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoBedSharp } from 'react-icons/io5'
import { HiShare } from 'react-icons/hi'
import { BsCheckLg } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { CardProperty } from "../../components/CardProperty";
import Link from "next/link";

import {
    Container, Header, Subtitle, Title, Col, Row, Price, ButtonIcon, Gallery, MainThumbnail, Thumbnail,
    Thumbs, Description, ContentDescription, Tags, TitleDescription, Features, Divisor, Video, Contact,
    ContactAgent, TextAgent, SendMessage, TitleRelacionados
} from "./styles";

export function Property() {
    return (
        <Container>
            <GridLayout p="0" ai="center">
                <Gallery>
                    <MainThumbnail>
                        <Image
                            src={"https://images4.alphacoders.com/865/865297.jpg"}
                            alt=""
                            layout="fill"
                        />
                    </MainThumbnail>
                    <Thumbs>
                        <Thumbnail>
                            <Image
                                src={"https://creativelayers.net/themes/findhouse-html/images/property/fp21.jpg"}
                                alt=""
                                layout="fill"
                            />
                        </Thumbnail>
                        <Thumbnail>
                            <Image
                                src={"https://creativelayers.net/themes/findhouse-html/images/property/fp24.jpg"}
                                alt=""
                                layout="fill"
                            />
                        </Thumbnail>
                        <Thumbnail>
                            <Image
                                src={"https://creativelayers.net/themes/findhouse-html/images/property/fp25.jpg"}
                                alt=""
                                layout="fill"
                            />
                        </Thumbnail>
                        <Thumbnail>
                            <Image
                                src={"https://creativelayers.net/themes/findhouse-html/images/property/fp26.jpg"}
                                alt=""
                                layout="fill"
                            />
                        </Thumbnail>
                        <Thumbnail>
                            <Image
                                src={"https://creativelayers.net/themes/findhouse-html/images/property/fp21.jpg"}
                                alt=""
                                layout="fill"
                            />
                        </Thumbnail>
                        <Thumbnail>
                            <Image
                                src={"https://creativelayers.net/themes/findhouse-html/images/property/fp24.jpg"}
                                alt=""
                                layout="fill"
                            />
                        </Thumbnail>
                    </Thumbs>
                </Gallery>
            </GridLayout>

            <GridLayout p="0 0 2rem 0" ai="center">
                <Header>
                    <Col>
                        <Title>Casa à venda no Loteamento Ipanema</Title>
                        <Subtitle>Catalão, GO</Subtitle>
                    </Col>
                    <Row>
                        <Price>R$ 575.000,00</Price>
                        <ButtonIcon>Compartilhar <HiShare /></ButtonIcon>
                    </Row>
                </Header>
            </GridLayout>

            <Section bg="#f7f7f7">
                <GridLayout p="2rem 0rem 2rem 0" ai="center">
                    <Description>
                        <ContentDescription>
                            <Tags>
                                <span>Casa</span>
                                <span>Área construída: 187m²</span>
                                <span>Área do terreno: 240m²</span>
                                <span><IoBedSharp />Quartos: 2</span>
                                <span><FaBath />Banheiros: 2</span>
                                <span><FaCar />Garagem: 2 vagas</span>
                            </Tags>

                            <TitleDescription>Descrição</TitleDescription>
                            <p>
                                Excelente casa com 03 quartos sendo 02 suítes, sala ampla com pé direito duplo,
                                cozinha ampla, banheiro social, lavanderia coberta, piso porcelanato, forro laje,
                                rica em gesso e iluminação, esquadrias de alumínio, garagem coberta para 02 carros,
                                toda murada com portões.
                            </p>

                            <Divisor></Divisor>

                            <TitleDescription>Destaques</TitleDescription>
                            <Features>
                                <li><BsCheckLg /> Churrasqueira</li>
                                <li><BsCheckLg /> Piscina</li>
                                <li><BsCheckLg /> Cooktop</li>
                                <li><BsCheckLg /> Secadora</li>
                                <li><BsCheckLg /> Piscina</li>
                                <li><BsCheckLg /> Cooktop</li>
                                <li><BsCheckLg /> Secadora</li>
                                <li><BsCheckLg /> Piscina</li>
                                <li><BsCheckLg /> Cooktop</li>
                                <li><BsCheckLg /> Secadora</li>
                            </Features>

                            <Divisor></Divisor>

                            <TitleDescription>Video</TitleDescription>
                            <Video>
                                <iframe
                                    src="https://www.youtube.com/embed/9qfBm2L75bg"
                                    allowFullScreen={true}
                                >
                                </iframe>
                            </Video>
                        </ContentDescription>

                        <Contact>
                            <TitleDescription>Publicado por<span>R$ 570.000,00</span></TitleDescription>

                            <Divisor></Divisor>

                            <ContactAgent>
                                <TextAgent>
                                    <h4>André Machado</h4>
                                    <span>(64) 98144-9999</span>
                                    <span>email@amimoveis.com.br</span>
                                    <Link href="#">Ver mais anúncios</Link>
                                </TextAgent>
                                <Image
                                    src={"https://creativelayers.net/themes/findhouse-html/images/team/10.jpg"}
                                    alt=""
                                    width={160}
                                    height={160}
                                />
                            </ContactAgent>

                            <Divisor></Divisor>

                            <SendMessage>
                                <Link href="#">Entrar em contato<IoLogoWhatsapp /></Link>
                                <Link href="#">Agendar visita<FaCalendarAlt /></Link>
                            </SendMessage>
                        </Contact>
                    </Description>
                </GridLayout>
            </Section>

            <Section bg="#fff">
                <GridLayout p="2rem 0 4rem" ai="center">
                    <TitleRelacionados>Imóveis relacionados</TitleRelacionados>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        navigation={true}
                        className="cardproperty"

                        style={{
                            padding: "0 10px"
                        }}
                    >
                        <SwiperSlide><CardProperty /></SwiperSlide>
                        <SwiperSlide><CardProperty /></SwiperSlide>
                        <SwiperSlide><CardProperty /></SwiperSlide>
                        <SwiperSlide><CardProperty /></SwiperSlide>
                        <SwiperSlide><CardProperty /></SwiperSlide>
                        <SwiperSlide><CardProperty /></SwiperSlide>
                    </Swiper>
                </GridLayout>
            </Section>
        </Container >
    )
}