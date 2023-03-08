import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsMouse } from "react-icons/bs";
import { useSelect } from "../../../hooks/useSelect";
import { InputSelect } from "../../Forms/InputSelect";
import { Background, Banner, ButtonScroll, ButtonSubmit, ContentBanner, Form, Input, Subtitle, Tab, Tabs, Title, Type } from "./styles";
import BannerBackground from "../../../../public/images/banner-home1.jpg"
import CaixaAqui from "../../../../public/images/caixa.svg"
import { useFilter } from "../../../contexts/FilterContext";

export function BannerHome() {
    const {adType} = useFilter();
    const [bannerHeight, setBannerHeight] = useState(0);
    const bannerRef = useRef(null);
    const [adTypeActive, setAdTypeActive] = useState(0);

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
                <Image src={CaixaAqui} alt="Caixa Aqui" />

                <Title>Encontre o seu imóvel aqui!</Title>
                <Subtitle fz="1.4rem" ai="center">Conte com os melhores para você escolher!</Subtitle>

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
                    <ButtonSubmit>Buscar</ButtonSubmit>
                </Form>
                <ButtonScroll onClick={handleScrollTo}>
                    <BsMouse />
                </ButtonScroll>
            </ContentBanner>
        </Banner>
    )
}