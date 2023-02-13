import Image from 'next/image'
import { GridLayout, Section, Subtitle, Title } from '../../../styles/globals'
import theme from '../../../styles/theme'
import { CardTypeProperty } from '../../Cards/PropertyType'
import { BackgroundSection, TypePropertyContent } from './styles'
import BackgroundBanner from "../../../../public/images/banner-home2.jpg"

export function PropertyTypes() {
    return (
        <Section style={{ position: 'relative' }}>
            <BackgroundSection>
                <Image src={BackgroundBanner} alt={'banner'} />
            </BackgroundSection>

            <GridLayout p="3rem 0 2rem 0" ai="center">
                <Title cl={theme.colors.white} fz={"1.8rem"}>O que você está procurando?</Title>
                <Subtitle cl={theme.colors.white} fz={"1rem"} ai="center">Encontre o imóvel que você está procurando.</Subtitle>
                <TypePropertyContent style={{ boxShadow: "0px 0px 50px 0px rgba(19, 19, 28, 0.12)" }} >
                    <div>
                        <CardTypeProperty
                            icon="fa-casa"
                            title="Casa"
                            subtitle="Imóveis tradicionais que oferecem mais privacidade."
                        />
                        <CardTypeProperty
                            icon="fa-apartamento"
                            title="Apartamento"
                            subtitle="Imóveis que oferecem praticidade e segurança."
                        />
                    </div>
                    <div>
                        <CardTypeProperty
                            icon="fa-kitnet"
                            title="Kitnet"
                            subtitle="Imovéis que atendem suas necessidades básicas."
                        />
                        <CardTypeProperty
                            icon="fa-fazenda"
                            title="Fazenda"
                            subtitle="Imóveis que te proporcionam contato direto com a natureza."
                        />
                    </div>
                </TypePropertyContent>
            </GridLayout>
        </Section>
    )
}