import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`
export const Span = styled.span`
    position: absolute;
    bottom: .75rem;
    left: .75rem;
`
export const InputContent = styled.div`
    position: relative;

    span {
        color: ${({theme})=>theme.colors.gray_200}
    }
`
export const Label = styled.label`
    font-size: .875rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.gray_200};
`
export const InputText = styled.input`
    height: 48px;
    width: 100%;
    text-align: right;


    border-radius: 8px;
    border: 1px solid #d3d3d3;
    padding: .75rem ;
    padding-left: 2.2rem;

    font-size: .875rem;
    outline: 0;

    &:focus {
        border: 1px solid ${({theme}) => theme.colors.primary};
    }
`
export const Subtitle = styled.p`
    font-size: .875rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray_300};
`
export const Error = styled.span`
    width: fit-content;
    display: flex;
    align-items: center;
    margin-top: .875rem;
    padding: 6px 12px;
    border-radius: 8px;
    background: #fff0f0;
    color: #f94949;
    font-size: .75rem;
    font-weight: 500;

    svg {
        font-size: 1rem;
        margin-right: .25rem;
    }
`