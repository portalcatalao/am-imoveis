import Image from "next/image";
import { Body, ButtonIcon, Container, Footer, Header, Overlay, Stars, Subtitle, Thumbnail, Title } from "./styles";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

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
                        <ButtonIcon><FaWhatsapp /></ButtonIcon>
                        <ButtonIcon><FaFacebookF /></ButtonIcon>
                        <ButtonIcon><FaInstagram /></ButtonIcon>
                        <ButtonIcon><FaYoutube /></ButtonIcon>
                    </Overlay>
                </Thumbnail>
            </Header>
            <Body>
                <Title>Ronaldo Peres</Title>
            </Body>
            <Footer>
                <Subtitle>Especialista em vendas</Subtitle>
            </Footer>
        </Container>
    )
}