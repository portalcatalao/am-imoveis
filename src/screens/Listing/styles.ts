import styled from "styled-components";

interface Props {
    open?: boolean;
}

export const Container = styled.div`
    width: 100%;
    margin-top: 72px;
    padding: 2rem 0;
    background-color: #fafafa;

    @media(max-width: 720px) {
        padding-top: 0;
    }
`
export const Breadcrumb = styled.span`
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 10px;

    a:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`
export const Content = styled.div`
    width: 100%;
    margin-top: 28px;
    
    display: grid;
    grid-template-columns: 350px 1fr;
    width: 100%;
    grid-gap: 20px;

    @media (max-width: 1020px) {
        grid-template-columns: 1fr;
    }
`

export const Filter = styled.form<Props>`
    background: #fff;
    padding: 28px;
    border: 1px solid rgb(235, 235, 235);

    border-radius: ${({ theme }) => theme.borders.main};
    height: fit-content;

    display: flex;
    flex-direction: column;
    gap: 18px;

    input {
        outline: 0;
        &:focus {
            border: 1px solid ${({ theme }) => theme.colors.primary};
        }
    }

    div {
        display: flex;
        justify-content: center;
        gap: 16px;
        align-items: center;
    }

    @media (max-width: 1020px) {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;

        max-width: 90%;
        border-radius: 0;
        border: 0;
        height: 100vh;

        overflow: auto;
        transition: transform 0.3s linear;

        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    }
`
export const TestDiv = styled.div<Props>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9998;
    background: rgba(0,0,0,.5);
    display: ${({ open }) => open ? 'initial' : 'none'};
`

export const ShowFilter = styled.div<Props>`
    display: none;
    width: 180px;
    grid-template-columns: 45px 1fr;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 28px;
    border-radius: ${({ theme }) => theme.borders.main};
    background-color: #3c4056;
    color: #fff;
    cursor: pointer;

    
    @media(max-width: 1020px) {
        display: grid;
    }

    div {
        padding: 12px 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #262937;
        border-radius: ${({ theme }) => theme.borders.main};
    }
`


export const Divisor = styled.div`
    width: 100%;
    height: 1px;
    background: #f1f1f1;
    margin: 12px 0;
`
export const Search = styled.div`
    width: 100%;

    h3 {
        font-weight: 500;
    }

    div {
        display: flex;
        flex-direction: column;
    }
    
    input {
        width: 100%;
        height: 46px;
        padding-left: 18px;
        font-size: 14px;
        font-weight: 400;

        border: 1px solid #d3d3d3;
        border-radius: ${({ theme }) => theme.borders.main};
        
        ::placeholder {
            color: #333;
        }
    }

    button {
        cursor: pointer;
        width: 50px;
        height: 46px;

        svg {
            width: 18px;
            height: 18px;
        }

        padding: 0 16px;
        border-radius: ${({ theme }) => theme.borders.main};

        display: flex;
        align-items: center;
        justify-content: center;

        border: 0;
        background: #f8f8f8;
        border: 1px solid rgb(235, 235, 235);

        :hover {
            background-color: ${({ theme }) => theme.colors.primary};
            color: #fff;
        }
    }
`
export const Inputs = styled.div`
    display: flex;
    flex-direction: column;

    div {
        gap: 8px;
        justify-content: center;

        span {
            margin-top: 28px;
        }
    }
`

export const ButtonFiltrar = styled.button`
    height: 46px;
    border-radius: ${({ theme }) => theme.borders.main};
    border: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    
    cursor: pointer;
`

export const Tabs = styled.div`
    display: flex;
    gap: 1rem;

    button {
        width: 80px;
        padding: 8px 0;
        padding: 0 20px!important;
        width: 100%!important;
        font-weight: 400;
        border-radius: ${({ theme }) => theme.borders.main};
    }
`

interface ITab {
    active?: boolean;
}

export const ButtonShow = styled.div<Props>`
    margin-bottom: -20px;
    color: ${({ theme }) => theme.colors.gray_100};
    font-weight: 400;
    cursor: pointer;

    :hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const MoreOptions = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const CheckboxGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 6px!important;
`


export const Tab = styled.button<ITab>`
    width: 100px;
    height: 42px;
    border: 1px solid rgb(235, 235, 235);
    border-radius: ${({ theme }) => theme.borders.main};
    background: ${({ theme, active }) => active ? '#262937' : theme.colors.background};
    
    :hover {
        background: ${({ theme, active }) => active ? '#262937' : theme.colors.primary};
        color: #fff;
    }
    color: ${({ theme, active }) => active ? theme.colors.white : theme.colors.gray_100};
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
`

export const Results = styled.div`
    h3 {
        font-size: 18px;
        color: #333;
        font-weight: 500;
    }
`

export const Top = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 12px;
    align-items: center;

    width: 100%;
    background-color: #fff;
    padding: 8px 12px;
    margin-bottom: 30px;
    border-radius: ${({ theme }) => theme.borders.main};
    border: 1px solid rgb(235, 235, 235);


    @media (max-width: 720px) {
        grid-template-columns: 1fr;
        row-gap: 16px;
        padding: 16px;
    }
`

export const Right = styled.span`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 16px;
    
    span {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
`

export const Properties = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    flex: 1;

    @media(max-width: 720px) {
        align-items: center;
        justify-content: center;
    }
`


export const Bot = styled.ul`
    width: 100%;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 30px;

    li {
        width: 45px;
        height: 45px;
        border-radius: 30%;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgb(235, 235, 235);

        :nth-child(3) {
            background-color: #262937;
            color: #fff;
        }

        :first-child, :last-child {
            background: #e8e8e8;
        }

        :hover {
            cursor: pointer;
            background-color: #EC700F;
            color: #fff;
        }
    }
`
export const CloseFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between!important;
    font-size: 18px;
    margin-bottom: 28px;

    color: ${({ theme }) => theme.colors.gray_200};

    svg {
        width: 32px;
        height: 32px;
        padding: 6px;
        background: #f7f7f7;
        border-radius: ${({ theme }) => theme.borders.main};
    }

    @media(min-width: 1020px) {
        display: none!important;
    }
`