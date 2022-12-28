import Image from "next/image";
import { Body, Container, Header, Subtitle, Thumbnail, Title } from "./styles";
import image from "../../../public/images/banner-home1.jpg";


interface Props {
    Title1?: string;
}

export function CardLocality({ Title1 }: Props) {
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
                <Title>{Title1}</Title>
                <Subtitle>24 Propriedades</Subtitle>
            </Body>
        </Container>
    )
}