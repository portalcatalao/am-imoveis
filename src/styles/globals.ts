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
    
    display: flex;
    flex-wrap: wrap;
    gap: ${({ gap }) => gap ?? 0};
    flex-direction: ${({ fd }) => fd ?? 'column'};
    align-items: ${({ ai }) => ai ?? "flex-start"};
    justify-content: ${({ jc }) => jc ?? "flex-start"};
    padding: ${({ p }) => p ?? 0};
`
export const Section = styled.div<Props>`
    width: ${({ w }) => w ?? '100%'};
    height: ${({ h }) => h ?? 'auto'};
    background: ${({ bg }) => bg ?? 'transparent'};
    padding: ${({ p }) => p ?? 0};
    display: flex;
    flex-direction: ${({ fd }) => fd ?? 'column'};
    gap: ${({ gap }) => gap ?? 0};
    margin: ${({ m }) => m ?? 0};
`
export const Row = styled.div<Props>`
    width: ${({ w }) => w ?? '100%'};
    height: ${({ h }) => h ?? 'auto'};
    background: ${({ bg }) => bg ?? 'transparent'};
    padding: ${({ p }) => p ?? 0};
    display: flex;
    flex-wrap: wrap;
    gap: ${({ gap }) => gap ?? 0};
    border-radius: ${({ br }) => br ?? 0};
    overflow: hidden;
`
export const Col = styled.div<Props>`
    height: ${({ h }) => h ?? 'auto'};
    background: ${({ bg }) => bg ?? 'transparent'};
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ fd }) => fd ?? 'column'};
    flex: ${({ col }) => col ? `0 0 ${(col / 12) * 100}%` : '0 0 100%'};
    max-width: ${({ col }) => `${(col / 12) * 100}%`};
    height: ${({ h }) => h ?? 'auto'};
    border-radius: ${({ br }) => br ?? 0};
    padding: ${({ p }) => p ?? 0};
    margin: ${({ m }) => m ?? 0};
`
