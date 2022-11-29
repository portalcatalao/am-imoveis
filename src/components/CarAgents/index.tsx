import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedin, FaStar, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { Body, ButtonIcon, Container, Footer, Header, Overlay, Stars, Subtitle, Thumbnail, Title } from "./styles";

export function CardAgents() {
    return (
        <Container>
            <Header>
                <Thumbnail>
                    <Image
                        src={"https://creativelayers.net/themes/findhouse-html/images/team/10.jpg"}
                        alt=""
                        width={204}
                        height={255}
                    />
                    <Overlay>
                        <ButtonIcon>
                            <FaWhatsapp />
                        </ButtonIcon>
                        <ButtonIcon>
                            <FaFacebookF />
                        </ButtonIcon>
                        <ButtonIcon>
                            <FaInstagram />
                        </ButtonIcon>
                        <ButtonIcon>
                            <FaTwitter />
                        </ButtonIcon>
                        <ButtonIcon>
                            <FaLinkedin />
                        </ButtonIcon>
                        <ButtonIcon>
                            <FaYoutube />
                        </ButtonIcon>
                    </Overlay>
                </Thumbnail>
            </Header>
            <Body>
                <Title>Luiz Eduardo</Title>
            </Body>
            <Footer>
                <Subtitle>Agente</Subtitle>
                <Stars><span>5</span><FiStar /></Stars>
            </Footer>
        </Container>
    )
}