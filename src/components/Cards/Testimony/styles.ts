import styled from "styled-components";

export const Container = styled.div`
    width: 890px;
    max-height: 400px;
    padding: 28px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: ${({ theme }) => theme.borders.main};
    margin: 0 auto;

    svg {
        width: 25px;
        height: 25px;
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const Text = styled.div`
`

export const Autor = styled.div`
    margin-top: 28px;
    display: flex;
    font-weight: 500;
    flex-direction: column;

    align-items: center;

    span {
        font-weight: 300;
    }
`