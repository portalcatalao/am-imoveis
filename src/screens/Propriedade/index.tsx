import Image from "next/image";
import { GridLayout, Section } from "../../styles/globals";
import { FaBath, FaCar } from 'react-icons/fa';
import { IoBedSharp } from 'react-icons/io5'
import { HiShare } from 'react-icons/hi'
import { BsCheckLg } from 'react-icons/bs'
import Link from "next/link";

import {
    Container, Header, Subtitle, Title, Col, Row, Price, ButtonIcon, Gallery, MainThumbnail, Thumbnail,
    Thumbs, Description, ContentDescription, Tags, TitleDescription, Features, Divisor, Video, Contact,
    ContactAgent, TextAgent, SendMessage, TitleRelacionados, LinkButton
} from "./styles";
import { GalleryView } from "../../components/GalleryView";
import { getUrl } from "../../helpers/functions";
import { maskPrice } from "../../helpers/mask";
import { Featured } from "../../components/SectionsHome/Featured";

export default function Property({ property, properties }) {
    return (
        <Container>
            <GridLayout p="0" ai="center">
                <Gallery>
                    <MainThumbnail>
                        <Image
                            src={getUrl(property.thumbnail)}
                            alt=""
                            layout="fill"
                        />
                    </MainThumbnail>
                    {property.images &&
                        <Thumbs>
                            {property.images[0] &&
                                <Thumbnail>
                                    <Image
                                        src={getUrl(property.images[0])}
                                        alt=""
                                        layout="fill"
                                    />
                                </Thumbnail>
                            }
                            {property.images[1] &&
                                <Thumbnail>
                                    <Image
                                        src={getUrl(property.images[1])}
                                        alt=""
                                        layout="fill"
                                    />
                                </Thumbnail>
                            }
                            {property.images[2] &&
                                <Thumbnail>
                                    <Image
                                        src={getUrl(property.images[2])}
                                        alt=""
                                        layout="fill"
                                    />
                                </Thumbnail>
                            }
                            {property.images[3] &&
                                <Thumbnail>
                                    <Image
                                        src={getUrl(property.images[3])}
                                        alt=""
                                        layout="fill"
                                    />
                                </Thumbnail>
                            }
                            {property.images[4] &&
                                <Thumbnail>
                                    <Image
                                        src={getUrl(property.images[4])}
                                        alt=""
                                        layout="fill"
                                    />
                                </Thumbnail>
                            }
                            {property.images[5] &&
                                <Thumbnail>
                                    <Image
                                        src={getUrl(property.images[5])}
                                        alt=""
                                        layout="fill"
                                    />
                                </Thumbnail>
                            }
                        </Thumbs>
                    }
                </Gallery>
            </GridLayout>


            {/* <GalleryView /> */}

            <GridLayout p="0 0 2rem 0" ai="center">
                <Header>
                    <Col>
                        <Title>{property.type.charAt(0).toUpperCase() + property.type.slice(1) + ' em ' + property.address.district}</Title>
                        <Subtitle>{property.address.city}, {property.address.state}</Subtitle>
                    </Col>
                    <Row>
                        <Price>R$ {maskPrice(property.value)}</Price>
                        <ButtonIcon>Compartilhar <HiShare /></ButtonIcon>
                    </Row>
                </Header>
            </GridLayout>

            <Section bg="#f7f7f7">
                <GridLayout p="2rem 0rem 2rem 0" ai="center">
                    <Description>
                        <ContentDescription>
                            <Tags>
                                <span>Área: {property.area}m²</span>
                                <span><IoBedSharp />Quartos: {property.numberRooms}</span>
                                <span><FaBath />Banheiros: {property.numberBathrooms}</span>
                                <span><FaCar />Garagem: {property.numberGarages} vaga (s)</span>
                            </Tags>

                            <TitleDescription>Descrição</TitleDescription>
                            <p>
                                {property.description}
                            </p>

                            {
                                property.hasPool &&
                                property.hasSolarEnergy &&
                                property.hasSecuritySystem &&
                                property.hasBarbecue &&
                                property.hasEletricFence &&
                                <>
                                    <Divisor></Divisor>
                                    <TitleDescription>Destaques</TitleDescription>
                                    <Features>
                                        {property.hasPool && <li><BsCheckLg />Piscina</li>}
                                        {property.hasSolarEnergy && <li><BsCheckLg />Energia Solar</li>}
                                        {property.hasSecuritySystem && <li><BsCheckLg />Cooktop</li>}
                                        {property.hasBarbecue && <li><BsCheckLg />Secadora</li>}
                                        {property.hasEletricFence && <li><BsCheckLg />Piscina</li>}
                                    </Features>
                                </>
                            }


                            {property.video &&
                                <>
                                    <Divisor></Divisor>
                                    <TitleDescription>Video</TitleDescription>
                                    <Video>
                                        <iframe
                                            src="https://www.youtube.com/embed/9qfBm2L75bg"
                                            allowFullScreen={true}
                                        >
                                        </iframe>
                                    </Video>
                                </>
                            }
                        </ContentDescription>

                        {property.owner &&
                            <Contact>
                                <TitleDescription>Publicado por<span>R$ {maskPrice(property.value)}</span></TitleDescription>
                                <Divisor></Divisor>
                                <ContactAgent>
                                    <TextAgent>
                                        <h4>{property.owner?.name}</h4>
                                        <span>{property.owner?.cellPhone}</span>
                                        <span>{property.owner?.email}</span>
                                        <Link href="#">Ver mais anúncios</Link>
                                    </TextAgent>
                                    <Image
                                        src={getUrl(property.owner?.avatar)}
                                        alt=""
                                        width={160}
                                        height={160}
                                    />
                                </ContactAgent>
                                <Divisor></Divisor>
                                <SendMessage>
                                    <LinkButton href="#" fill={true}>Entrar em contato</LinkButton>
                                    <LinkButton href="#">Agendar visita</LinkButton>
                                </SendMessage>
                            </Contact>
                        }
                        {!property.owner && property.realEstate &&
                            <Contact>
                                <TitleDescription>Publicado por<span>R$ {maskPrice(property.value)}</span></TitleDescription>
                                <Divisor></Divisor>
                                <ContactAgent>
                                    <TextAgent>
                                        <h4>{property.realEstate?.name}</h4>
                                        <span>{property.realEstate?.cellPhone}</span>
                                        <span>{property.realEstate?.email}</span>
                                        <Link href="#">Ver mais anúncios</Link>
                                    </TextAgent>
                                    <Image
                                        src={getUrl(property.realEstate?.logo)}
                                        alt=""
                                        width={160}
                                        height={160}
                                    />
                                </ContactAgent>
                                <Divisor></Divisor>
                                <SendMessage>
                                    <LinkButton href="#" fill={true}>Entrar em contato</LinkButton>
                                    <LinkButton href="#">Agendar visita</LinkButton>
                                </SendMessage>
                            </Contact>
                        }
                    </Description>
                </GridLayout>
            </Section>

            <Section bg="#fff">
                <GridLayout p="2rem 0 4rem" ai="center">
                    <Featured
                        properties={properties}
                        title={"Imóveis relacionados"}
                        p={""}
                    />
                </GridLayout>
            </Section>
        </Container >
    )
}