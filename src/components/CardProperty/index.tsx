import { Container, CardHeader, Thumbnail, CardBody, Category, Title, Address, TagPrice, Resume, Mask } from "./styles";
import Image from 'next/image';

import { FaBed, FaBath, FaCar } from 'react-icons/fa';
import { IoBedSharp } from 'react-icons/io5'

export function CardProperty() {
    return (
        <Container href={"/imoveis/teste"}>
            <Thumbnail>
                <Image src="https://creativelayers.net/themes/findhouse-html/images/property/fp10.jpg" alt={""} layout="fill" />
                <Mask />
            </Thumbnail>

            <CardHeader>
                <Category>Para venda</Category>
            </CardHeader>

            <CardBody>
                <TagPrice>R$ 500.000,00</TagPrice>

                <Title>Nossa Senhora de Fátima</Title>

                <Address>
                    Catalao
                </Address>

                <Resume>
                    <li><IoBedSharp />4</li>
                    <li><FaBath />2</li>
                    <li><FaCar />2</li>
                    <li>138 m²</li>
                </Resume>
            </CardBody>
        </Container>
    )
}