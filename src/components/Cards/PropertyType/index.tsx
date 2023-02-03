import { Container, Icon, IconWrapper, Text, Subtitle, Title } from "./styles";

interface Props {
    icon: string;
    title: string;
    subtitle: string;
}

export function CardTypeProperty({ icon, subtitle, title }: Props) {
    return (
        <Container>
            <IconWrapper>
                <Icon
                    name={icon}
                />
            </IconWrapper>
            <Text>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </Text>
        </Container>
    )
}