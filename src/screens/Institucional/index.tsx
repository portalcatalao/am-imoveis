import { GridLayout, Section } from "../../styles/globals";
import { Container } from './styles'
import { HeaderPage } from '../../components/Breadcrumb'
import { Title, Text, Text2, Background, Content, Description, Card } from './styles'
import Image from "next/image";


export default function Institutional() {
    return (
        <Container>
            <HeaderPage title="Institucional" />

            <Section bg="#fff" p="0 0 2rem 0">
                <GridLayout p="2rem 0">
                    <Title>Quem Somos</Title>
                    <Content>
                        <Background>
                            <Description>Em 2013, iniciamos nossas atividades com uma estrutura preparada para atender às necessidades do mercado imobiliário, sempre contando com uma equipe de profissionais altamente qualificados e experientes, que sempre priorizam a honestidade e o atendimento das expectativas dos clientes.</Description>
                            <Image src="https://amimoveiscatalao.com.br/images/un1.jpg" width={"700"} height="700" />
                        </Background>
                        <Text>
                            <Card>
                                <h2>Missão</h2>
                                <p>Nossa missão é garantir negociações justas e bem-sucedidas entre proprietários, locatários, compradores e vendedores, sempre com transparência, imparcialidade, experiência e especialização. Temos uma equipe de profissionais altamente capacitados e comprometidos em proporcionar um atendimento de excelência.</p>
                            </Card>
                            <Card>
                                <h2>Visão</h2>
                                <p>Nossa visão é expandir nosso negócio e ser reconhecida como líder na oferta de soluções imobiliárias de excelência, atendendo às necessidades e expectativas dos nossos clientes de maneira inovadora e eficiente.</p>
                            </Card>
                            <Card>
                                <h2>Valores</h2>
                                <p>Valorizamos a ética, transparência, e a confidencialidade, priorizando a empatia e carisma com nossos clientes. Adotamos uma postura proativa e flexível, comprometida com a eficiência e agilidade no atendimento. Temos organização e profissionalismo como base em nossas ações, garantindo a confiança de nossos clientes em todos os processos.</p>
                            </Card>
                        </Text>
                    </Content>
                </GridLayout>
            </Section>

            <Section bg="#f9f9f9" p="0 0 2rem 0">
                <GridLayout p="2rem 0">
                    <Text2>
                        <h1>Estrutura</h1>

                        <li>
                            <span>Comercial e Administrativo</span> – Possui uma equipe de corretores de imóveis especializada e devidamente cadastrada junto ao CRECI e uma equipe de departamento de aluguel com experiência no mercado por mais de 10 anos, contamos com um suporte administrativo para realização de um bom negócio com segurança e agilidade.
                        </li>
                        <li>
                            <span>Departamento de Vendas</span> – Setor responsável por negociar os imóveis nas mais variadas faixas de preços e localizações.
                        </li>
                        <li>
                            <span>Departamento de Aluguel</span> – Setor preparado para atender a administrar os imóveis dos clientes que buscam uma negociação competente, experiente, transparente e com seriedade.
                        </li>
                        <li>
                            <span>Departamento Financeiro</span> – Área que oferece suporte completo ao cliente no departamento de aluguel e na compra/venda acompanhando todo processo de financiamento.
                        </li>
                        <li>
                            <span>Assessoria Jurídica</span> – Departamento jurídico gratuito proporciona segurança e tranquilidade nas soluções de questões atuando através de consultoria e atendendo os interesses dos clientes em processos.
                        </li>

                        <p>
                            Estamos totalmente a disposição para recebê-los em nosso escritório, oferecendo desde já os nossos serviços para atender suas necessidades na área imobiliária.
                        </p>
                    </Text2>
                </GridLayout>
            </Section>
        </Container>
    )
}