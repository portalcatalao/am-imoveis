import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 250px;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem 1rem;
    cursor: pointer;

    :hover {
        > div {
            background-color: ${({ theme }) => theme.colors.primary} !important;
        }
        h2 {
            color: ${({ theme }) => theme.colors.primary} !important;
        }
    }
`
export const Title = styled.h2`
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray_200};

    transition: .3s;
    margin-bottom: .35rem;
`
export const Subtitle = styled.span`
    text-align: center;
    font-size: .875rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray_200};


`
interface Icon {
    name?: string;
}
export const Icon = styled.div<Icon>`
    width: 56px;
    height: 56px;
    background-color: #fff;
    
    mask-image: url(${({ name }) => `/icons/${name}.svg`});
    mask: url(${({ name }) => `/icons/${name}.svg`}) no-repeat center;
    -webkit-mask: url(${({ name }) => `/icons/${name}.svg`}) no-repeat center;
    mask-size: auto;
`
export const IconWrapper = styled.div<Icon>`
    width: 100px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 30%;
    transition: .3s;

    margin-bottom: 2rem;

    :hover {
        background: ${({ theme }) => theme.colors.primary};
    }
`