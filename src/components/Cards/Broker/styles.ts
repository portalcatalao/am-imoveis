import styled from "styled-components";

export const Container = styled.div`
`
export const Header = styled.div`
    margin-bottom: 1rem;
`
export const Thumbnail = styled.div`
    width: 203px;
    height: 260px;
    border-radius: ${({ theme }) => theme.borders.main};
    overflow: hidden;
    position: relative;

    :hover {
        > div {
            opacity: 1;
        }
    }
`
export const Overlay = styled.div`
    width: 100%;
    height: fit-content;
    background: rgba(8, 19, 29, .8);
    opacity: 0;

    position: absolute;
    bottom: 0;
    left: 0;

    transition: .3s;

    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 1rem 0.5rem ;
    gap: 20px;
`
export const ButtonIcon = styled.button`
    background: transparent;
    border: 0;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borders.main};
    display: flex;

    svg {
        color: #fff;
        width: 20px;
        height: 18px;
    }
`
export const Body = styled.div`

`
export const Title = styled.h2`
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray_200};

    transition: .3s;
    margin-bottom: .25rem;
`
export const Subtitle = styled.span`
    text-align: center;
    font-size: .875rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray_200};
`
export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Stars = styled.div`
    display: flex;
    align-items: center;
    gap: .25rem;
    svg {
        font-size: .8rem;
        color: ${({ theme }) => theme.colors.gray_200};
    }
    span {
        line-height: 100%;
        text-align: center;
        font-size: .875rem;
        font-weight: 300;
        color: ${({ theme }) => theme.colors.gray_200};
    }
`