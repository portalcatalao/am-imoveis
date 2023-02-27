import styled from "styled-components";
import { GridLayout } from "../../styles/globals";

export const Container = styled.div`
    min-height: 70vh;
`
export const Content = styled(GridLayout)`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
`
export const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray_100};
    margin-bottom: 4px;
`
export const Subtitle = styled.p`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray_100};
    max-width: 70%;
    margin-bottom: 16px;
`

export const Tag = styled.span`
    padding: 10px;
    background: ${({ theme }) => theme.colors.primary_light};
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    margin-bottom: 1rem;
    border-radius: 12px;
`
export const Card = styled.div`
    margin: 1rem 0.5rem;
    width: 300px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 1.5rem;
    border-radius: 12px;

    background: ${({ theme }) => theme.colors.white};
    border: 0.5px solid #dfdfdf;
    transition: .5s;

    position: relative;
    overflow: hidden;
    
    ::after {
        content: "";
        width: 274px;
        height: 274px;
        background: rgba(255,255,255,.07);
        border-radius: 50%;
        position: absolute;
        right: -70px;
        top: -70px;
        opacity: 0;
        transition: .5s;
        transform: scale(.4);
    }
    ::before {
        content: "";
        width: 274px;
        height: 274px;
        background: rgba(255,255,255,.07);
        border-radius: 50%;
        position: absolute;
        right: -90px;
        top: -90px;
        opacity: 0;
        transition: .6s;
        transform: scale(.4);
    }
    @media (max-width: 720px) {
        background: ${({ theme }) => theme.colors.primary};
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 4px 8px rgba(0, 0, 0, .15);
        svg, span, h2, a {
            color: #fff !important;
        }
        div div {
            color: #fff !important;
            background-color: #fff !important;
        }
        ::after, ::before {
            opacity: 1;
            transform: scale(1);
        }
    }
    :hover {
        background: ${({ theme }) => theme.colors.primary};
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 4px 8px rgba(0, 0, 0, .15);
        svg, span, h2, a {
            color: #fff !important;
        }
        div div {
            color: #fff !important;
            background-color: #fff !important;
        }
        ::after, ::before {
            opacity: 1;
            transform: scale(1);
        }
    }
`
export const CardHeader = styled.div`
    width: 206px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-bottom: 1rem;
    z-index: 10;
`
export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    a {
        font-size: 1rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.primary};

        display: flex;
        align-items: center;
        gap: .5rem;
        transition: .5s;
    }
`

export const CardTitle = styled.span`
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: .5rem;
    transition: .5s;
`
export const CardText = styled.span`
    font-size: .875rem;
    margin-bottom: 1rem;
    transition: .5s;
`
