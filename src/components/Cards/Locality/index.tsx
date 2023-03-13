import Image, { StaticImageData } from "next/image";
import { Body, Container, Header, Subtitle, Thumbnail, Title } from "./styles";

interface Props {
    title?: string,
    src?: string | StaticImageData,
    alt?: string,
    subtitle?: string;
    link?: string;
}

export function CardLocality({ title, src, alt, subtitle, link, ...props }: Props) {
    return (
        <Container href={link}>
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