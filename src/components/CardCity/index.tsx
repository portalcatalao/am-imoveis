import Image from "next/image";
import { Body, Container, Header, Subtitle, Thumbnail, Title } from "./styles";
import image from "../../../public/images/banner-home.jpg";

export function CardCity() {
    return (
        <Container>
            <Header>
                <Thumbnail>
                    <Image 
                        src={image}
                        alt=""
                        layout="fill"
                    />
                </Thumbnail>
            </Header>
            <Body>
                <Title>Catalão</Title>
                <Subtitle>24 Propriedades</Subtitle>
            </Body>
        </Container>
    )
}