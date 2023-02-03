import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import logo_white from "../../../public/logo-white.svg";
import logo from "../../../public/logo.svg";
import { HiMenu } from 'react-icons/hi';
import { FiX } from 'react-icons/fi'

import { Container, Navbar, Brand, Links, Button, MenuMobile, Mask } from "./styles";

export function Header({ top }) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <Container>
            <Navbar top={top && router.asPath === '/'}>
                <Brand>
                    <Link href={'/'}>
                        <Image src={top && router.asPath === '/' ? logo_white : logo} alt={'logo'} />
                    </Link>
                </Brand>

                {open && <Mask />}

                <Links open={open}>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/institucional'}>Institucional</Link></li>
                    <li><Link href={'/imoveis'}>Imóveis</Link></li>
                    <li><Link href={'/servicos'}>Serviços</Link></li>
                    <li><Link href={'/contato'}>Contato</Link></li>
                </Links>
                <MenuMobile onClick={() => setOpen(!open)}>
                    {!open ? <HiMenu /> : <FiX />}
                </MenuMobile>
            </Navbar>
        </Container>
    )
}