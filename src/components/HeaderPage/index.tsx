import { GridLayout } from "../../styles/globals";
import { Container } from "./styles";

interface Props {
    title: string;
}

export function HeaderPage({ title }: Props) {
    return (
        <Container>
            <GridLayout p="2rem 0">
                <p>Home / {title}</p>
                <h1>{title}</h1>
            </GridLayout>
        </Container>
    )
}

