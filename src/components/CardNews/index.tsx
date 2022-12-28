import { Container, CardHeader, Thumbnail, Title, CardBody, SubTitle, Description, Mask } from "./styles";
import Image from 'next/image'

export function CardNews() {
    return (
        <Container href={"/"}>
            <CardHeader>
                <Thumbnail>
                    <Image src="https://creativelayers.net/themes/findhouse-html/images/property/fp22.jpg" alt="ok" layout="fill" />
                    <Mask />
                </Thumbnail>
            </CardHeader>
            <CardBody>
                <Title>Residencial Torres do Lago</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in lectus venenatis, convallis lacus et, placerat nunc.</Description>
            </CardBody>
        </Container>
    )
}