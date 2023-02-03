import { FaQuoteLeft } from 'react-icons/fa'
import { Container, Text, Autor } from './styles'

interface Props {
    p1?: string,
    p2?: string,
    p3?: string,
    autor: string
    prof: string
}

export function CardTestimony({ p1, p2, p3, autor, prof }: Props) {
    return (
        <Container>
            <FaQuoteLeft />
            <Text>
                <p>{p1}</p>
                <p>{p2}</p>
                <p>{p3}</p>
            </Text>
            <Autor>
                {autor}
                <span>{prof}</span>
            </Autor>
        </Container>
    )
}