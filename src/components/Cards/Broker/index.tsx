import Image, { StaticImageData } from "next/image";
import { Body, ButtonIcon, Container, Footer, Header, LinkButton, Overlay, Subtitle, Thumbnail, Title } from "./styles";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Link from "next/link";

interface Props {
    id?: string,
    src?: string | StaticImageData,
    whatsapp?: string,
    instagram?: string,
    facebook?: string,
    youtube?: string,
    title?: string,
    subtitle?: string,
}

export function CardAgents({ id, src, whatsapp, facebook, instagram, youtube, title, subtitle }: Props) {
    return (
        <Container>
            <Header>
                <Thumbnail>
                    <Image
                        src={src}
                        alt=""
                        layout="fill"
                    />
                    <Overlay>
                        <LinkButton href={`/imoveis/corretores/${id}`}>Ver imóveis deste corretor</LinkButton>
                    </Overlay>
                </Thumbnail>
            </Header>
            <Body>
                <Title>{title}</Title>
            </Body>
            <Footer>
                <Subtitle>{subtitle}</Subtitle>
            </Footer>
        </Container>
    )
}