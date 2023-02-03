import styled from "styled-components";

interface Props {
    active?: boolean;
}

export const Container = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 100%;

    h3, div {
        width: 100%;
    }

    h3 {
        font-weight: 400;
        font-size: 16px;
    }


    button {
        width: 80px;
        padding: 8px 0;
        padding: 0 20px!important;
        width: 100%!important;
        font-weight: 400;
        border-radius: ${({ theme }) => theme.borders.main};
    }
`

export const Item = styled.button<Props>`
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