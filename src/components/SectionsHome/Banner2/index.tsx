import Image from "next/image";
import { useState } from "react";
import { useSelect } from "../../../hooks/useSelect";
import { GridLayout } from "../../../styles/globals";
import { InputSelect } from "../../Forms/InputSelect";
import {
    Banner, Background, ButtonSubmit, ContentBanner, Form,
    Input, Search, Subtitle, Tab, Tabs, TitleMain, Type, Text
} from "./styles";

import CaixaAqui from "../../../../public/images/caixa.svg"
import BannerBackground from "../../../../public/images/banner-home2.jpg"

export function BannerHome({ title, subtitle }) {
    const [adTypeActive, setAdTypeActive] = useState(0);
    const adType = useSelect();

    return (
        <Banner>
            <Background>
                <Image src={BannerBackground} alt="banner" />
            </Background>

            <ContentBanner>
                <GridLayout p="2rem 8rem">
                    <Text>
                        <TitleMain>{title}</TitleMain>
                        <Subtitle>{subtitle}</Subtitle>

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
                    </Text>
                </GridLayout>

                <Image src={CaixaAqui} alt="Caixa Aqui" />
            </ContentBanner>
        </Banner>
    )
}