import { Col, GridLayout, Row, Section, Subtitle, Title } from "../../../styles/globals"
import theme from "../../../styles/theme"
import { CardLocality } from "../../Cards/Locality"

import Banner1 from "../../../../public/images/locality.jpg"

export function Localities({ tags }) {
    function titleToSlug(title: string): string {
        // Converte o título para minúsculas
        const lowercaseTitle = title.toLowerCase();

        // Substitui espaços por hífens
        const hyphenatedTitle = lowercaseTitle.replace(/\s+/g, '-');

        // Remove todos os caracteres que não sejam letras, números, hífens ou sublinhados
        const slug = hyphenatedTitle.replace(/[^a-z0-9-]/g, '');

        return slug;
    }

    return (
        <Section>
            <GridLayout p="2rem 0" ai="center">
                <Title cl={theme.colors.gray_100} fz={"1.8rem"}>Encontre seu imóvel nestes bairros</Title>
                <Subtitle cl={theme.colors.gray_100} fz={"1rem"} ai="center">Encontre o imóvel perfeito para você no bairro que desejar.</Subtitle>
                <Row>
                    {tags.map((item, index) => {
                        if (index > 5) return null;
                        return (
                            <Col col={4} h="150px" p="0 .5rem" m="0 0 1rem 0">
                                <CardLocality
                                    src={Banner1}
                                    title={item.name}
                                    subtitle={`${item.count} propriedades`}
                                    link={`/imoveis/filter?district=${titleToSlug(item.name)}`}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </GridLayout>
        </Section>
    )
}