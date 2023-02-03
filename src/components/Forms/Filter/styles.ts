import styled from "styled-components"

interface Props {
    open?: boolean;
}

interface ITab {
    active?: boolean;
}

export const ShowFilter = styled.div`
    display: none;
    width: 180px;
    height: 42px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: ${({ theme }) => theme.borders.main};
    background: #3c4056;
    color: #fff;
    grid-template-columns: 46px 1fr;
    cursor: pointer;
    
    @media(max-width: 1020px) {
        display: grid;
    }

    div {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #262937;
        border-radius: ${({ theme }) => theme.borders.main};
    }
`
export const Mask = styled.div<Props>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9998;
    background: rgba(0,0,0,.5);
    display: ${({ open }) => open ? 'initial' : 'none'};
`
export const Container = styled.form<Props>`
    background: #fff;
    padding: 28px;
    border: 1px solid rgb(235, 235, 235);
    border-radius: ${({ theme }) => theme.borders.main};
    height: fit-content;
    display: grid;
    row-gap: 16px;

    input {
        outline: 0;
        &:focus {
            border: 1px solid ${({ theme }) => theme.colors.primary};
        }
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }

    @media (max-width: 1020px) {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;

        height: 100%;
        max-width: 90%;
        border-radius: 0;
        border: 0;

        overflow: auto;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: transform 0.3s linear;
    }
`
export const CloseFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between!important;
    font-size: 18px;
    margin-bottom: 18px;

    color: ${({ theme }) => theme.colors.gray_200};

    div {
        font-size: 14px!important;
    }

    svg {
        width: 38px;
        height: 38px;
        padding: 8px;
        background: #fafafa;
        border-radius: ${({ theme }) => theme.borders.main};
    }

    @media(min-width: 1020px) {
        display: none!important;
    }
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
        padding-left: 12px;
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
        border: 1px solid #d3d3d3;

        :hover {
            background-color: ${({ theme }) => theme.colors.primary};
            color: #fff;
        }
    }
`
export const Divisor = styled.span`
    display: flex;
    width: 100%;
    height: 1px;
    background: #f1f1f1;
    margin: 12px 0;
`
export const Tabs = styled.div`
    display: flex;
    gap: 1rem;
`
export const Tab = styled.button<ITab>`
    width: 100%!important;
    height: 42px;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme, active }) => active ? theme.colors.white : theme.colors.gray_100};
    background: ${({ theme, active }) => active ? '#262937' : theme.colors.background};

    border-radius: ${({ theme }) => theme.borders.main};
    border: 1px solid rgb(235, 235, 235);
    cursor: pointer;
    
    :hover {
        background: ${({ theme, active }) => active ? '#262937' : theme.colors.primary};
        color: #fff;
    }
`
export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
`
export const InputPriceGroup = styled.div`
    span {
        margin-top: 38px;
    }
`
export const CheckboxGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px!important;
`
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
export const ButtonFiltrar = styled.button`
    height: 46px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borders.main};
    border: 0;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
`