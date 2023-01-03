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
                            <Title>Sobre</Title>
                            <Text>
                                Estamos re-imaginando como você compra, vende e aluga.
                                Agora é mais fácil entrar em um lugar que você ama, estamos aqui para te ajudar!
                            </Text>
                        </Col>
                        <Col col={3} p={"2rem 1rem"}>
                            <Title>Acesso rápido</Title>
                            <Link href={'/'}>Sobre nós</Link>
                            <Link href={'/'}>Serviços que oferecemos</Link>
                            <Link href={'/'}>Imóveis disponíveis</Link>
                            <Link href={'/'}>Entre em contato</Link>
                        </Col>
                        <Col col={3} p={"2rem 1rem"}>
                            <Title>Contate-nos</Title>
                            <Link href={'/'}>contato@amimoveis.com.br</Link>
                            <Link href={'/'}>Av. Vinte de Agosto, 1062</Link>
                            <Link href={'/'}>Centro, Catalão - GO</Link>
                            <Link href={'/'}>(64) 3442-5200 </Link>
                        </Col>
                        <Col col={3} p={"2rem 1rem"}>
                            <div>
                                <Col col={12} p={" 0 0 2.5rem 0"}>
                                    <Title>Siga-nos</Title>
                                    <Social>
                                        <ButtonIcon><FaWhatsapp /></ButtonIcon>
                                        <ButtonIcon><FaFacebookF /></ButtonIcon>
                                        <ButtonIcon><FaInstagram /></ButtonIcon>
                                        <ButtonIcon><FaYoutube /></ButtonIcon>
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