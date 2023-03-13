import Link from "next/link";
import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    margin-top: 72px;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
`

export const Contact = styled.div`
    width: 450px;
    position: sticky;
    padding: 20px;
    background: #fff;
    height: fit-content;
    border-radius: ${({ theme }) => theme.borders.main};
    border: 1px solid rgb(235, 235, 235);

    div {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;
    }

    p {
        margin-top: 10px;
        color: ${({ theme }) => theme.colors.gray_200};
    }
`

export const Top = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;

    background-color: #fff;
    padding: 8px 12px;
    margin-bottom: 1.2rem;
    border-radius: ${({ theme }) => theme.borders.main};
    border: 1px solid rgb(235, 235, 235);

    h3 {
        font-weight: 500;
        font-size: 16px;
    }

    @media(max-width: 1175px) {
        grid-template-columns: 1.4fr 1fr;
    }

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
        row-gap: 16px;
        padding: 16px;
    }
`
export const Email = styled.span`
    word-break: break-all;
`



export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`


export const ContactAgent = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    img {
        object-fit: cover;
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }

    @media(max-width: 720px) {
        flex-direction: column-reverse;
        align-items: center;

        img {
            height: 160px;
        }
    }
`
export const Right = styled.span`
    display: flex;
    width: 100%;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
`
export const TextAgent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px!important;

    h4 {
        color: ${({ theme }) => theme.colors.gray_100};
        font-weight: 500;
    }

    span {
        color: ${({ theme }) => theme.colors.gray_200};
        word-break: break-all;
    }

    a { 
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 400;
    }
`
export const SendMessage = styled.form`
    margin-top: 16px;
    display: flex;
    gap: 12px;
    text-align: center;

    @media(max-width: 720px) {
        flex-direction: column;
        a {
            width: 100%!important;
        };
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;

        svg {
            width: 18px;
            height: 18px;
        }

        border: 0.5px solid #ddd;

        width: 50%;
        padding: 10px 12px;
        font-size: 14px;
        border-radius: ${({ theme }) => theme.borders.main};
        cursor: pointer;
        color: ${({ theme }) => theme.colors.gray_100};
        background-color: #f7f7f7;

        transition: all .2s;
        :hover {
            background: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.white};
        }
    }
`
interface ILinkButton {
    fill?: boolean
}

export const LinkButton = styled(Link) <ILinkButton>`
    background: ${({ fill, theme }) => fill && theme.colors.primary}!important;
    color: ${({ fill, theme }) => fill && theme.colors.white}!important;
    border: ${({ fill }) => fill && 'none'}!important;
`

export const Properties = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 90px 1fr;
`