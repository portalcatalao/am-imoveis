import { Button, Container, Content, Error, Subtitle, Title } from "./styles";

export function NotFound() {
    return (
        <Container>
            <Content>
                <Error>404</Error>
                <Title>Página não encontrada</Title>
                <Button href={'/'}>Voltar para página inicial</Button>
            </Content>
        </Container>
    )
}