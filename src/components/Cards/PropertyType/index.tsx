import { Container, Icon, IconWrapper, Text, Subtitle, Title } from "./styles";

interface Props {
    icon: string;
    title: string;
    subtitle: string;
    link?: string;
}

export function CardTypeProperty({ icon, subtitle, title, link }: Props) {
    return (
        <Container href={link ? link : "#"}>
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