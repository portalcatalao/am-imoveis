import { Container, Item } from './styles'
import { useState } from 'react';
import { useSelect } from '../../hooks/useSelect';

interface Props {
    title: string;
}

export default function QuantitySelect({ title }: Props) {
    const [adTypeActive, setAdTypeActive] = useState(0);
    const adType = useSelect();

    return (
        <Container>
            <h3>{title}</h3>
            <div>
                <Item active={adTypeActive === 1} onClick={() => setAdTypeActive(adTypeActive === 1 ? 0 : 1)}>1</Item>
                <Item active={adTypeActive === 2} onClick={() => setAdTypeActive(adTypeActive === 2 ? 0 : 2)}>2</Item>
                <Item active={adTypeActive === 3} onClick={() => setAdTypeActive(adTypeActive === 3 ? 0 : 3)}>3</Item>
                <Item active={adTypeActive === 4} onClick={() => setAdTypeActive(adTypeActive === 4 ? 0 : 4)}>4+</Item>
            </div>
        </Container>
    )
}