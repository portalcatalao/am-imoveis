import Image, { StaticImageData } from "next/image";
import { Body, Container, Header, Subtitle, Thumbnail, Title } from "./styles";

interface Props {
    title?: string,
    src?: string | StaticImageData,
    alt?: string,
    subtitle?: string;
}

export function CardLocality({ title, src, alt, subtitle, ...props }: Props) {
    return (
        <Container>
            <Header>
                <Thumbnail>
                    <Image
                        src={src}
                        alt={alt}
                    />
                </Thumbnail>
            </Header>
            <Body>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </Body>
        </Container>
    )
}