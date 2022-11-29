import { subtle } from "crypto";
import { Container, Icon, IconWrapper, Subtitle, Title } from "./styles";

interface Props {
    icon: string;
    title: string;
    subtitle: string;
}

export function CardTypeProperty({icon, subtitle, title}: Props) {
    return (
        <Container>
            <IconWrapper>
                <Icon
                    name={icon}
                />
            </IconWrapper>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}