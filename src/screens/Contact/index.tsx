import { InputText } from "../../components/Forms/InputText";
import { Textarea } from "../../components/Forms/Textarea";
import { useForm } from "../../hooks/useForm";
import { ContactInfo, Button, Column, Container, Content, Form, Subtitle, Title, Info, Data, Social } from "./styles";
import { HeaderPage } from "../../components/Breadcrumb";

import { FaFacebook, FaInstagram } from "react-icons/fa"
import { MdEmail, MdPhone } from "react-icons/md"
import Link from "next/link";

export default function Contact() {
    const name = useForm();
    const email = useForm('email');
    const phone = useForm('phone');
    const message = useForm();

    return (
        <Container>
            <HeaderPage title="Contato" />
            <Content>
                <Form>
                    <Title>Fale conosco</Title>
                    <Subtitle>Estamos à disposição para sanar suas dúvidas, preencha o formulário e descubra como podemos servi-lo.</Subtitle>
                    <Column>
                        <InputText
                            id="name"
                            title="Nome*"
                            type="text"
                            {...name}
                        />
                        <InputText
                            id="email"
                            title="Email*"
                            type="text"
                            {...email}
                        />
                        <InputText
                            id="phone"
                            title="Telefone*"
                            type="text"
                            {...phone}
                        />
                        <Textarea
                            id="message"
                            title="Messagem*"
                            {...message}
                        />
                        <Button>Enviar</Button>
                    </Column>
                </Form>
                <ContactInfo>
                    <Info>
                        <Data>
                            <Link href="tel:+5511999999999"><MdPhone /> (64) 98142-9881</Link>
                            <Link href="mailto:contato@amimoveis.com.br"><MdEmail />contato@amimoveis.com.br</Link>
                        </Data>

                        <Social>
                            <Link href="#"><FaFacebook />Facebook</Link>
                            <Link href="#"><FaInstagram />Instagram</Link>
                        </Social>
                    </Info>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.9461316713277!2d-47.93552958511247!3d-18.16639528761619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a6661604976179%3A0xd8baded46c9f6c22!2sAM%20Im%C3%B3veis%20Catal%C3%A3o%20Caixa%20Aqui!5e0!3m2!1sen!2sbr!4v1677624911620!5m2!1sen!2sbr" width="600" height="450" style={{ border: 0, maxWidth: '100%' }} loading="lazy"></iframe>
                </ContactInfo>
            </Content>
        </Container>
    )
}