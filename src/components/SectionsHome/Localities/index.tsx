import { Col, GridLayout, Row, Section, Subtitle, Title } from "../../../styles/globals"
import theme from "../../../styles/theme"
import { CardLocality } from "../../Cards/Locality"

import Banner1 from "../../../../public/images/locality.jpg"
import Banner2 from "../../../../public/images/locality.jpg"
import Banner3 from "../../../../public/images/locality.jpg"
import Banner4 from "../../../../public/images/locality.jpg"
import Banner5 from "../../../../public/images/locality.jpg"
import Banner6 from "../../../../public/images/locality.jpg"

export function Localities({ tags }) {
    return (
        <Section>
            <GridLayout p="2rem 0" ai="center">
                <Title cl={theme.colors.gray_100} fz={"1.8rem"}>Encontre seu imóvel nestes bairros</Title>
                <Subtitle cl={theme.colors.gray_100} fz={"1rem"} ai="center">Encontre o imóvel perfeito para você no bairro que desejar.</Subtitle>
                <Row jc="center">
                    {tags.map((item, index) => {
                        if(index > 5) return null;
                        return (
                            <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                                <CardLocality
                                    src={Banner1}
                                    title={item.name}
                                    subtitle={`${item.count} propriedades`}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </GridLayout>
        </Section>
    )
}