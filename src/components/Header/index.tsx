import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';

import logo_white from "../../../public/logo-white.svg";
import logo from "../../../public/logo.svg";
import { Dropdown } from "../Dropdown";

import { HiMenu } from 'react-icons/hi';
import { FiX } from 'react-icons/fi'

import { Container, Navbar, Brand, Links, Button, MenuMobile, TestDiv } from "./styles";

export function Header({ top }) {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Navbar top={top}>
                <Brand>
                    <Link href={'/'}>
                        <Image src={top ? logo_white : logo} alt={'logo'} />
                    </Link>
                </Brand>
                {open && <TestDiv />}
                <Links open={open}>
                    <li><Link href={'/'}>Home</Link></li>
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
                    <li><Link href={'/'}>Contato</Link></li>
                    <li><Button>Anunciar imóvel</Button></li>
                </Links>
                <MenuMobile onClick={() => setOpen(!open)}>
                    {!open ? <HiMenu /> : <FiX />}
                </MenuMobile>
            </Navbar>
        </Container>
    )
}