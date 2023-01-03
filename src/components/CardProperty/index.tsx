import { Container, CardHeader, Thumbnail, CardBody, Category, Title, Address, TagPrice, Resume, Mask } from "./styles";
import Image, { StaticImageData } from 'next/image';

import { FaBath, FaCar } from 'react-icons/fa';
import { IoBedSharp } from 'react-icons/io5'

interface Props {
    src?: string | StaticImageData;
    forRent?: boolean,
    forSell?: boolean,
    price?: string,
    title?: string,
    city?: string,
    bed?: string,
    bath?: string,
    car?: string,
    area?: string
}

export function CardProperty({ src, forRent, forSell, price, title, city, bed, bath, car, area }: Props) {
    return (
        <Container href={"/imoveis/teste"}>
            <Thumbnail>
                <Image src={src} alt={""} layout="fill" />
                <Mask />
            </Thumbnail>

            <CardHeader>
                {forRent && <Category rent={true} >Para alugar</Category>}
                {forSell && <Category rent={false}>Para venda</Category>}
            </CardHeader>

            <CardBody>
                <Address>{city}</Address>
                <Title>{title}</Title>
                <TagPrice>R$ {price}</TagPrice>
                <Resume>
                    <li><IoBedSharp />{bed}</li>
                    <li><FaBath />{bath}</li>
                    <li><FaCar />{car}</li>
                    <li>{area} m²</li>
                </Resume>
            </CardBody>
        </Container>
    )
}