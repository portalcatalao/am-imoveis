import Link from "next/link";
import styled from "styled-components";

export const Container = styled.footer`
    a {
        font-size: .875rem;
        color: #b5bbd6;
        margin-bottom: .875rem;

        :hover {
            color: #fff;
        }
    }
`
export const ContentPrimary = styled.div`
    width: 100%;
    background: #2c2f3e;

    @media (max-width: 720px) {
        div {
            min-width: 200px;
        }
    }
`
export const ContentSecondary = styled.div`
    width: 100%;
    height: 64px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.secondary};
`
export const Title = styled.h2`
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 1rem;
`
export const Text = styled.p`
    font-size: .875rem;
    color: #b5bbd6;
`
export const Social = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`
export const ButtonIcon = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    color: #b5bbd6;
    
    cursor: pointer;

    svg {
        font-size: 1rem;
    }

    :hover {
        color: #fff;
    }
`
export const Form = styled.form`
    display: flex;
`
export const Input = styled.input`
    width: 200px;
    height: 48px;
    border-radius: ${({ theme }) => theme.borders.main};
    border: 0;
    padding: .875rem;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};

    :focus {
        border: 0;
        outline: 0;
    }
`
export const Button = styled.button`
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: ${({ theme }) => theme.borders.main};
    border: 0;
    margin-left: .5rem;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    svg {
        font-size: 1.2rem;
    }
`