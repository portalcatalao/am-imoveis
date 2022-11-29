import { Container, CardHeader, Thumbnail, CardBody, Category, Title, Address, TagPrice, Resume, Mask } from "./styles";
import Image from 'next/image';
import { IoLocationSharp } from 'react-icons/io5';

import { FaBed, FaBath, FaCar } from 'react-icons/fa';

export function Card() {
    return (
        <Container href={"/imoveis/teste"}>
            <Thumbnail>
                <Image src="https://creativelayers.net/themes/findhouse-html/images/property/fp12.jpg" alt={""} layout="fill" />
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
                    <li><FaBed /> 4</li>
                    <li><FaBath /> 2</li>
                    <li><FaCar /> 2</li>
                    <li>100 m²</li>
                </Resume>
            </CardBody>
        </Container>
    )
}