import Image from "next/image";
import { Body, Container, Header, Subtitle, Thumbnail, Title } from "./styles";
import image from "../../../public/images/banner-home.jpg";

export function CardLocality() {
    return (
        <Container>
            <Header>
                <Thumbnail>
                    <Image
                        src={image}
                        alt=""
                    />
                </Thumbnail>
            </Header>
            <Body>
                <Title>Nossa Senhora de Fátima</Title>
                <Subtitle>24 Propriedades</Subtitle>
            </Body>
        </Container>
    )
}