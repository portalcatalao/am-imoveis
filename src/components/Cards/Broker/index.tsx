import Image, { StaticImageData } from "next/image";
import { Body, ButtonIcon, Container, Footer, Header, Overlay, Subtitle, Thumbnail, Title } from "./styles";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Link from "next/link";

interface Props {
    src?: string | StaticImageData,
    whatsapp?: string,
    instagram?: string,
    facebook?: string,
    youtube?: string,
    title?: string,
    subtitle?: string,
}

export function CardAgents({ src, whatsapp, facebook, instagram, youtube, title, subtitle }: Props) {
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
                        {whatsapp && <ButtonIcon>
                            <Link href={whatsapp}>
                                <FaWhatsapp />
                            </Link>
                        </ButtonIcon>
                        }
                        {facebook && <ButtonIcon>
                            <Link href={facebook}>
                                <FaFacebookF />
                            </Link>
                        </ButtonIcon>}
                        {instagram && <ButtonIcon>
                            <Link href={instagram}>
                                <FaInstagram />
                            </Link>
                        </ButtonIcon>
                        }
                        {youtube && <ButtonIcon>
                            <Link href={youtube}>
                                <FaYoutube />
                            </Link>
                        </ButtonIcon>}
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