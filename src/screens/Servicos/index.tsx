import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import theme from "../../styles/theme";
import { Content, Subtitle, Container, Tag, Title, Card, CardHeader, CardBody, CardTitle, CardText } from "./styles";
import { HeaderPage } from '../../components/Breadcrumb'

export default function Services() {
    return (
        <Container>
            <HeaderPage title={"Serviços"} />
            <Content>
                <Title>Serviços que oferecemos</Title>
                <Subtitle>Conheça os serviços</Subtitle>
                <Swiper slidesPerView={"auto"} spaceBetween={24} style={{ width: 'fit-content !important', maxWidth: "100%", marginTop: 24 }}>
                    <SwiperSlide>
                        <Card>
                            <CardHeader>
                                Administração
                            </CardHeader>
                            <CardBody>
                                <CardText>A AM IMÓVEIS garante uma administração segura e rentável para seus proprietários, dentro da filosofia de atender com qualidade absoluta todos os clientes, tendo por meta dedicação total aos seus investimentos, atua com carteiras de imóveis comerciais, residenciais, industriais de médio e alto padrão, e coloca à disposição toda a experiência e credibilidade.</CardText>
                            </CardBody>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <CardHeader>
                                Locação
                            </CardHeader>
                            <CardBody>
                                <CardText>A AM IMÓVEIS conta com equipe capacitada, que atende e agiliza as locações de imóveis e propicia a satisfação de proprietários, inquilinos e fiadores. Procuramos adequar os valores dos imóveis à realidade econômica do mercado, compatibilizando a situação financeira do cliente ao negócio imobiliário pretendido.</CardText>
                            </CardBody>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <CardHeader>
                                Venda
                            </CardHeader>
                            <CardBody>
                                <CardText>AM IMÓVEIS proporciona soluções adequadas de atendimento, respeita o perfil de cada cliente, atua com ética e eficiência, oferece os melhores profissionais, capacitados, fornece atendimento personalizado com as melhores oportunidades em imóveis residenciais, comerciais e áreas para incorporações, acompanha as negociações desde o inicio com a formalização da proposta até a assinatura da escritura definitiva de compra e venda do imóvel, com supervisão de advogados especializados, para dar total segurança na conclusão de um ótimo investimento.</CardText>
                            </CardBody>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </Content>
        </Container>
    )
}