import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`
export const Span = styled.span`
    position: absolute;
    bottom: .70rem;
    left: .75rem;
`
export const InputContent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 46px;

    span {
        color: ${({ theme }) => theme.colors.gray_200}
    }
`
export const Label = styled.label`
    font-size: .875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray_200};
    margin-bottom: -8px;
`
export const InputText = styled.input`
    height: 46px;
    width: 100%;
    text-align: right;

    border: 1px solid #d3d3d3;
    border-radius: ${({ theme }) => theme.borders.main};

    padding: .75rem;
    padding-left: 2.2rem;

    font-size: .875rem;
    outline: 0;

    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary};
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
    border-radius: ${({ theme }) => theme.borders.main};

    background: #fff0f0;
    color: #f94949;
    font-size: .75rem;
    font-weight: 500;

    svg {
        font-size: 1rem;
        margin-right: .25rem;
    }
`