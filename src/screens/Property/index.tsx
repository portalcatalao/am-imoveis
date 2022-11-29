import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { FiHeart, FiShare, FiShare2 } from "react-icons/fi";
import { GridLayout } from "../../styles/globals";
import { Container, Header, Subtitle, Title, Col, Row, Price, ButtonIcon, Gallery, Thumbnail, Thumbs } from "./styles";

export function Property() {
    const refGallery = useRef(null);
    const [galleryHeight, setGalleryHeight] = useState(420);

    useEffect(() => {
        if (refGallery) {
            setGalleryHeight(refGallery.current.clientWidth * 40 / 100);
        }
    }, [refGallery]);

    return (
        <Container>
            <GridLayout>
                <Header>
                    <Col>
                        <Title>Luxury Family Home</Title>
                        <Subtitle>1421 San Pedro St, Los Angeles, CA 90015</Subtitle>
                    </Col>
                    <Row>
                        <Price>R$ 13.000,00</Price>
                        <ButtonIcon><FiShare2 /></ButtonIcon>
                        <ButtonIcon><FiHeart /></ButtonIcon>
                    </Row>
                </Header>
                <Gallery ref={refGallery} style={{ height: galleryHeight }}>
                    <Thumbnail>
                    <Image
                                src={"https://images4.alphacoders.com/865/865297.jpg"}
                                alt=""
                                layout="fill"
                            />
                    </Thumbnail>
                    <Thumbs>
                        <Thumbnail>
                            <Image
                                src={"https://images4.alphacoders.com/865/865297.jpg"}
                                alt=""
                                layout="fill"
                            />
                        </Thumbnail>
                        <Thumbnail>
                            <Image
                                src={"https://images4.alphacoders.com/865/865297.jpg"}
                                alt=""
                                layout="fill"
                            />
                        </Thumbnail>
                        <Thumbnail>
                            <Image
                                src={"https://images4.alphacoders.com/865/865297.jpg"}
                                alt=""
                                layout="fill"
                            />
                        </Thumbnail>
                        <Thumbnail>
                            <Image
                                src={"https://images4.alphacoders.com/865/865297.jpg"}
                                alt=""
                                layout="fill"
                            />
                        </Thumbnail>
                        <Thumbnail>
                            <Image
                                src={"https://images4.alphacoders.com/865/865297.jpg"}
                                alt=""
                                layout="fill"
                            />
                        </Thumbnail>
                        <Thumbnail>
                            <Image
                                src={"https://images4.alphacoders.com/865/865297.jpg"}
                                alt=""
                                layout="fill"
                            />
                        </Thumbnail>
                    </Thumbs>
                </Gallery>
            </GridLayout>
        </Container>
    )
}