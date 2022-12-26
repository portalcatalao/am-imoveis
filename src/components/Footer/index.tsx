import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { Col, GridLayout, Row } from "../../styles/globals";
import { Container, ContentPrimary, ContentSecondary, Title, Text, Social, ButtonIcon, Form, Input, Button } from "./styles";

export function Footer() {
    return (
        <Container>
            <ContentPrimary>
                <GridLayout>
                    <Row p="1rem 0">
                        <Col col={3} p={"2rem 1rem"}>
                            <Title>Sobre o site </Title>
                            <Text>Estamos re-imaginando como você compra, vende e aluga. Agora é mais fácil entrar em um lugar que você ama. Então vamos fazer isso, juntos. </Text>
                        </Col>
                        <Col col={3} p={"2rem 1rem"}>
                            <Title>Links Rápidos </Title>
                            <Link href={'/'}>Sobre nós </Link>
                            <Link href={'/'}>Termos e Condições </Link>
                            <Link href={'/'}>Guia do usuário </Link>
                            <Link href={'/'}>Centro de Apoio </Link>
                            <Link href={'/'}>Informações de Imprensa </Link>
                        </Col>
                        <Col col={3} p={"2rem 1rem"}>
                            <Title>Contate-nos </Title>
                            <Link href={'/'}>info@findhouse.com </Link>
                            <Link href={'/'}>Collins Street West, Victoria </Link>
                            <Link href={'/'}>8007, Austrália. </Link>
                            <Link href={'/'}>+1 246-345-0699 </Link>
                            <Link href={'/'}>+1 246-345-0695 </Link>
                        </Col>
                        <Col col={3} p={"2rem 1rem"}>
                            <div>
                                <Col col={12} p={" 0 0 2.5rem 0"}>
                                    <Title>Siga-nos </Title>
                                    <Social>
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
                                    </Social>
                                </Col>
                                <Col col={12}>
                                    <Title>Se inscrever </Title>
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