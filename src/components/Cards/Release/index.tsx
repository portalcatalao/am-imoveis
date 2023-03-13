import { Container, CardHeader, Thumbnail, Title, CardBody, SubTitle, Description, Mask } from "./styles";
import Image, { StaticImageData } from 'next/image'

interface Props {
    src?: string | StaticImageData,
    title?: string,
    description?: string
}

export function CardNews({ src, title, description }: Props) {
    return (
        <Container href={"/"}>
            <CardHeader>
                <Thumbnail>
                    <Image src={src} alt="" layout="fill" />
                </Thumbnail>
            </CardHeader>
            <CardBody>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </CardBody>
        </Container>
    )
}