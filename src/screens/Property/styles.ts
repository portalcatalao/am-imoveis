import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    margin-top: 72px;
    padding-top: 2rem;

    @media(max-width: 720px) {
        padding: 0;
    }
`
export const Gallery = styled.div`
    /* display: grid;
    grid-template-columns: 1fr 450px;
    grid-template-rows: 1fr;
    */

    display: flex;
    width: 100%;
    height: 480px;
    
    gap: 1rem;
    margin-bottom: 2rem;
    
    @media(max-width: 720px) {
        display: flex;
        flex-direction: column;
        height: auto;
        margin-bottom: 0;
    }
`
export const MainThumbnail = styled.div`
    width: 185%;
    position: relative;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.borders.main};

    img {
        object-fit: cover;
    }

    @media(max-width: 720px) {
        width: 100%;
        height: 240px;
    }
`
export const Thumbs = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`
export const Thumbnail = styled.div`
    width: 100%;

    border-radius: ${({ theme }) => theme.borders.main};

    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        object-fit: cover;
    }

    @media(max-width: 720px) {
        height: 140px;
    }
`
export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media(max-width: 800px) {
        flex-direction: column;
        gap: 16px;
        padding: 0 10px;
    }
`
export const Col = styled.div`
    display: flex;
    flex-direction: column;
`
export const Row = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    @media(max-width: 800px) {
        justify-content: space-between;
    }
`
export const Title = styled.h2`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray_100};
`
export const Subtitle = styled.span`
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray_100};
`
export const Price = styled.span`
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray_100};

    @media(max-width: 720px) {
        font-size: 1.3rem;
    }
`
export const ButtonIcon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    border: 0;
    border-radius: ${({ theme }) => theme.borders.main};
    padding: 8px 12px;
    height: 38px;

    color: ${({ theme }) => theme.colors.gray_100};
    background: ${({ theme }) => theme.colors.gray_500};
    cursor: pointer;

    transition: all .3s;
    :hover {
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.primary};
    }

    svg {
        width: 18px;
        height: 18px;
    }
`
export const Description = styled.div`
    display: grid;
    grid-template-columns: 1fr 450px;
    grid-gap: 18px;
    justify-content: center;
    position: relative;

    @media (max-width: 1040px) {
        grid-template-columns: 1fr;
    }
`
export const ContentDescription = styled.div`
    background: #fff;
    padding: 28px;

    display: flex;
    flex-direction: column;
    row-gap: 8px;
    border: 1px solid rgb(235, 235, 235);
    border-radius: ${({ theme }) => theme.borders.main};

    p, span, li {
        color: ${({ theme }) => theme.colors.gray_200};
        font-size: 16px;
    }
`
export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 26px;

    span {
        background: #f7f7f7;
        padding: 8px 18px;
        display: flex;
        align-items: center;
        gap: 12px;
        border-radius: ${({ theme }) => theme.borders.main};
        color: ${({ theme }) => theme.colors.gray_100};
        font-size: 14px;
    }

    @media(max-width: 480px) {
        span {
        }
    }
`
export const TitleDescription = styled.h3`
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray_100};

    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-weight: 400;
        font-size: 16px;
    }
`
export const Divisor = styled.div`
    width: 100%;
    height: 1px;
    background: #f1f1f1;
    margin: 26px 0;
`
export const Features = styled.ul`
    list-style-type: none;
    max-height: 240px;

    @media (max-width: 720px) {
        max-height: 380px;
    }

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    li {
        line-height: 36px;
        font-weight: 400;

        display: flex;
        align-items: center;
        gap: 8px;

        svg {
            width: 22px;
            height: 22px;
            color: ${({ theme }) => theme.colors.primary};
            background-color: #fafafa;
            padding: 6px;
            border-radius: 6px;
        }
    }
`
export const Video = styled.div`
    height: 440px;

    iframe {
        width: 100%;
        height: 100%;
        border: 0;
        border-radius: ${({ theme }) => theme.borders.main};
    }

    @media(max-width: 720px) {
        max-height: 220px;
    }
`
export const Contact = styled.div`
    position: sticky;
    top: 96px;

    padding: 28px;
    background: #fff;
    height: fit-content;
    border-radius: ${({ theme }) => theme.borders.main};
    border: 1px solid rgb(235, 235, 235);

    div {
        display: flex;
        gap: 16px;
        margin-bottom: 16px;
    }

    p {
        margin-top: 10px;
        color: ${({ theme }) => theme.colors.gray_200};
    }
`
export const ContactAgent = styled.div`
    display: flex;
    
    img {
        object-fit: cover;
        border-radius: 16%;
    }

    @media(max-width: 720px) {
        flex-direction: column-reverse;
        align-items: center;

        img {
            height: 180px;
            margin-bottom: 20px;
        }
    }
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
    }

    a { 
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 400;
    }
`
export const SendMessage = styled.form`
    margin-top: 16px;
    display: flex;
    gap: 16px;
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
        justify-content: space-between;
        gap: 16px;

        svg {
            width: 18px;
            height: 18px;
        }

        width: 50%;
        padding: 10px 12px;
        font-size: 14px;
        border-radius: ${({ theme }) => theme.borders.main};
        background: #f1f1f1;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.gray_100};

        transition: all .2s;
        :hover {
            background: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.white};
        }
    }
`
export const TitleRelacionados = styled.h2`
    width: 100%;
    margin-bottom: 26px;
    font-weight: 500;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray_100};
    padding: 0 10px;
`