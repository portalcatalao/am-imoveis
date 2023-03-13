import Link from "next/link";
import { Container, Content, Fixed } from "./styles";

interface Props {
    title: string;
    subtitle?: string;
}

export function HeaderPage({ title, subtitle }: Props) {
    return (
        <Container>
            <Content>
                <Fixed>
                    <Link href="/">Home</Link>
                    {subtitle &&
                        <>
                            <span>/</span>
                            <p>{subtitle}</p>
                        </>}
                    <span>/</span>
                </Fixed>
                <h1>{title}</h1>
            </Content>
        </Container>
    )
}

