import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsMouse } from "react-icons/bs";
import { useSelect } from "../../../hooks/useSelect";
import { GridLayout } from "../../../styles/globals";
import { Banner, Background, ButtonScroll, ButtonSubmit, ContentBanner, Form, Input, Search, Subtitle, Tab, Tabs, TitleMain, Type } from "./styles";
import CaixaAqui from "../../../../public/images/caixa.svg"
import BannerBackground from "../../../../public/images/banner-home2.jpg"
import { InputSelect } from "../../Forms/InputSelect";

export function BannerHome() {
    const [bannerHeight, setBannerHeight] = useState(0);
    const bannerRef = useRef(null);
    const [adTypeActive, setAdTypeActive] = useState(0);
    const adType = useSelect();

    const handleScrollTo = (e) => {
        const body = document.querySelector('body');
        body.scrollTo({ top: bannerHeight - 72 });
    }

    useEffect(() => {
        setBannerHeight(bannerRef.current.offsetHeight)
    }, []);

    return (
        <Banner ref={bannerRef}>
            <Background>
                <Image src={BannerBackground} alt="banner" />
            </Background>
            <ContentBanner>
                <GridLayout p="2rem 6rem">
                    <TitleMain>Encontre o imóvel desejado</TitleMain>
                    <Subtitle>Savanna Imóveis a mais tradicional da cidade!</Subtitle>

                    <Search>
                        <Tabs>
                            <Tab active={adTypeActive === 0} onClick={() => setAdTypeActive(0)}>Comprar</Tab>
                            <Tab active={adTypeActive === 1} onClick={() => setAdTypeActive(1)}>Alugar</Tab>
                        </Tabs>
                        <Form>
                            <Type>
                                <InputSelect
                                    placeholder="Tipo de imóvel"
                                    {...adType}
                                />
                            </Type>
                            <Input placeholder="Pesquise por bairro, cidade ou código" />
                            <ButtonSubmit>Buscar imóveis</ButtonSubmit>
                        </Form>
                    </Search>
                </GridLayout>
                <ButtonScroll onClick={handleScrollTo}>
                    <BsMouse />
                </ButtonScroll>
            </ContentBanner>
        </Banner>
    )
}