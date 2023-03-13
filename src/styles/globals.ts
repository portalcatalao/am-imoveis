import styled from "styled-components";

export interface Props {
    bg?: string;
    cl?: string;
    m?: string;
    p?: string;
    h?: string;
    w?: string;
    fz?: string;
    fd?: 'column' | 'row';
    ai?: string;
    jc?: string;
    gap?: string;
    col?: number;
    br?: string;
}

export const GridLayout = styled.div<Props>`
    width: 100%;
    max-width: 1312px;
    margin: 0 auto;
    padding: ${({ p }) => p ?? 0};
    position: relative;
    
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ fd }) => fd ?? 'column'};

    align-items: ${({ ai }) => ai ?? "flex-start"};
    justify-content: ${({ jc }) => jc ?? "flex-start"};
    gap: ${({ gap }) => gap ?? 0};
    
    @media (max-width: 1312px) {
        padding-left: 1rem !important;
        padding-right: 1rem !important;
    }
`
export const Section = styled.section<Props>`
    width: ${({ w }) => w ?? '100%'};
    height: ${({ h }) => h ?? 'auto'};
    margin: ${({ m }) => m ?? 0};
    padding: ${({ p }) => p ?? 0};

    display: flex;
    flex-direction: ${({ fd }) => fd ?? 'column'};
    gap: ${({ gap }) => gap ?? 0};

    background: ${({ bg }) => bg ?? 'transparent'};
`
export const Row = styled.div<Props>`
    width: ${({ w }) => w ?? '100%'};
    height: ${({ h }) => h ?? 'auto'};
    padding: ${({ p }) => p ?? 0};
    border-radius: ${({ br }) => br ?? 0};

    display: flex;
    flex-wrap: wrap;
    gap: ${({ gap }) => gap ?? 0};

    overflow: hidden;
    background: ${({ bg }) => bg ?? 'transparent'};

    align-items: ${({ ai }) => ai ?? "flex-start"};
    justify-content: ${({ jc }) => jc ?? "flex-start"};

    @media (max-width: 720px) {
        flex: 1;
        max-width: 100%;
    }
`
export const Col = styled.div<Props>`
    max-width: ${({ col }) => `${(col / 12) * 100}%`};
    height: ${({ h }) => h ?? 'auto'};
    padding: ${({ p }) => p ?? 0};
    margin: ${({ m }) => m ?? 0};
    border-radius: ${({ br }) => br ?? 0};

    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ fd }) => fd ?? 'column'};
    flex: ${({ col }) => col ? `0 0 ${(col / 12) * 100}%` : '0 0 100%'};
    
    background: ${({ bg }) => bg ?? 'transparent'};

    @media (max-width: 720px) {
        flex: 1;
        max-width: 100%;
    }
`
export const Title = styled.h1<Props>`
    text-align: center;
    font-size: 56px;
    font-weight: 600;
    color: ${({ cl }) => cl ?? '#ffffff'};
    font-size: ${({ fz }) => fz ?? "1.2rem"};

    @media (max-width: 720px) {
        font-size: 28px;
    }
`

export const Subtitle = styled.p<Props>`
    font-size: ${({ fz }) => fz ?? "1.2rem"};
    color: ${({ cl }) => cl ?? '#ffffff'};
    text-align: ${({ ai }) => ai ?? 'left'};
    margin-bottom: 1rem;

    @media (max-width: 720px) {
        font-size: 18px;
    }
`