import { Container, CardHeader, Thumbnail, Title, CardBody, SubTitle, Description } from "./styles";
import Image from 'next/image'

export function CardNews() {
    return (
        <Container href={"/"}>
            <CardHeader>
                <Thumbnail>
                    <Image src="https://creativelayers.net/themes/findhouse-html/images/blog/bh3.jpg" alt="ok" layout="fill" />
                </Thumbnail>
            </CardHeader>
            <CardBody>
                <SubTitle>Oportunidade</SubTitle>
                <Title>Residencial Torres do Lago</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in lectus venenatis, convallis lacus et, placerat nunc.</Description>
            </CardBody>
        </Container>
    )
}