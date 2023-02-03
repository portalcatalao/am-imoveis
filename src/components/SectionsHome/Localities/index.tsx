import { Col, GridLayout, Row, Section, Subtitle, Title } from "../../../styles/globals"
import theme from "../../../styles/theme"
import { CardLocality } from "../../Cards/Locality"

import Banner1 from "../../../../public/images/locality.jpg"
import Banner2 from "../../../../public/images/locality.jpg"
import Banner3 from "../../../../public/images/locality.jpg"
import Banner4 from "../../../../public/images/locality.jpg"
import Banner5 from "../../../../public/images/locality.jpg"
import Banner6 from "../../../../public/images/locality.jpg"

export function Localities() {
    return (
        <Section>
            <GridLayout p="2rem 0" ai="center">
                <Title cl={theme.colors.gray_100} fz={"1.8rem"}>Encontre seu imóvel nestes bairros</Title>
                <Subtitle cl={theme.colors.gray_100} fz={"1rem"} ai="center">Encontre o imóvel perfeito para você no bairro que desejar.</Subtitle>
                <Row>
                    <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                        <CardLocality
                            src={Banner1}
                            title="Nossa Senhora de Fátima"
                            subtitle="24 propriedades"
                        />
                    </Col>
                    <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                        <CardLocality
                            src={Banner2}
                            title="Castelo Branco I"
                            subtitle="24 propriedades"
                        />
                    </Col>
                    <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                        <CardLocality
                            src={Banner3}
                            title="Alto da Boa Vista II"
                            subtitle="24 propriedades"
                        />
                    </Col>
                    <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                        <CardLocality
                            src={Banner4}
                            title="Ipanema"
                            subtitle="24 propriedades"
                        />
                    </Col>
                    <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                        <CardLocality
                            src={Banner5}
                            title="Jardim Paraíso"
                            subtitle="24 propriedades"
                        />
                    </Col>
                    <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                        <CardLocality
                            src={Banner6}
                            title="Todos os bairros"
                            subtitle="240 propriedades"
                        />
                    </Col>
                </Row>
            </GridLayout>
        </Section>
    )
}