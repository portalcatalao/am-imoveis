import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { useConfig } from "../../contexts/ConfigContext";
import { Col, GridLayout, Row } from "../../styles/globals";
import { Container, ContentPrimary, ContentSecondary, Title, Text, Social, ButtonIcon, Form, Input, Button } from "./styles";

export function Footer() {
    const { config } = useConfig()

    const phone = config?.phone;
    const whatsapp = config?.whatsapp;
    const email = config?.email;
    const instagram = config?.instagram;
    const facebook = config?.facebook;
    const youtube = config?.youtube;
    const address = config?.address;

    return (
        <Container>
            <ContentPrimary>
                <GridLayout>
                    <Row p="1rem 0">
                        <Col col={3} p={"2rem 1rem"}>
                            <Title>Sobre</Title>
                            <Text>
                                Estamos re-imaginando como você compra, vende e aluga.
                                Agora é mais fácil entrar em um lugar que você ama, estamos aqui para te ajudar!
                            </Text>
                        </Col>
                        <Col col={3} p={"2rem 1rem"}>
                            <Title>Acesso rápido</Title>
                            <Link href={'/quem-somos'}>Sobre nós</Link>
                            <Link href={'/servicos'}>Serviços que oferecemos</Link>
                            <Link href={'/imoveis/filter?'}>Imóveis disponíveis</Link>
                            <Link href={'/contato'}>Entre em contato</Link>
                        </Col>
                        <Col col={3} p={"2rem 1rem"}>
                            <Title>Contate-nos</Title>
                            <Link href={'/'}>{email}</Link>
                            <Link href={'/'}>{address}</Link>
                            <Link href={'/'}>{phone}</Link>
                        </Col>
                        <Col col={3} p={"2rem 1rem"}>
                            <div>
                                <Col col={12} p={" 0 0 2.5rem 0"}>
                                    <Title>Siga-nos</Title>
                                    <Social>
                                        {facebook && <ButtonIcon target="_blank" href={facebook}><FaFacebookF /></ButtonIcon>}
                                        {instagram && <ButtonIcon target="_blank" href={instagram}><FaInstagram /></ButtonIcon>}
                                        {youtube && <ButtonIcon target="_blank" href={youtube}><FaYoutube /></ButtonIcon>}
                                    </Social>
                                </Col>
                                <Col col={12}>
                                    <Title>Inscreva-se</Title>
                                    <Form>
                                        <Input placeholder="Seu email" />
                                        <Button><FiChevronRight /></Button>
                                    </Form>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </GridLayout>
            </ContentPrimary>
            <ContentSecondary>
                <Text>©2022 AM Imóveis - Todos os direitos reservados.</Text>
            </ContentSecondary>
        </Container>
    )
}