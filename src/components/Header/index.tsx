import Link from "next/link";
import Image from "next/image";
import { Container, Navbar, Brand, Links, Button } from "./styles";
import logo_white from "../../../public/logo-white.svg";
import logo from "../../../public/logo.svg";
import { Dropdown } from "../Dropdown";

export function Header({top}) {
    return (
        <Container>
            <Navbar top={top}>
                <Brand>
                    <Link href={'/'}>
                        <Image src={top ? logo_white : logo} alt={'logo'} />
                    </Link>
                </Brand>
                <Links>
                    <Link href={'/'}>Home</Link>
                    <Dropdown title={"Institucional"}>
                        <Link href="">Imóveis para alugar</Link>
                        <Link href="">Imóveis para comprar</Link>
                    </Dropdown>
                    <Dropdown title={"Serviços"}>
                        <Link href="">Imóveis para alugar</Link>
                        <Link href="">Imóveis para comprar</Link>
                    </Dropdown>
                    <Dropdown title={"Venda"}>
                        <Link href="">Imóveis para alugar</Link>
                        <Link href="">Imóveis para comprar</Link>
                    </Dropdown>
                    <Dropdown title={"Aluguel"}>
                        <Link href="">Imóveis para alugar</Link>
                        <Link href="">Imóveis para comprar</Link>
                    </Dropdown>
                    <Link href={'/'}>Contato</Link>
                    <Button>Anunciar imóvel</Button>
                </Links>
            </Navbar>
        </Container>
    )
}