import styled from "styled-components";
import Link from 'next/link';

export const Container = styled(Link)`
    position: relative;
    display: flex;
    width: 380px;
    flex-flow: wrap;
    height: 300px;
    color: #fff;
    border: 0.5px solid #ebebeb;
    border-radius: ${({ theme }) => theme.borders.main};
    background: ${({ theme }) => theme.colors.white};
    flex-grow: 1;     
    flex-shrink: 1; 

    img {
        transition: transform .3s
    }

    :hover {
        img {
            transform: scale(1.08);
        }
    }
`

export const CardHeader = styled.div`
    position: absolute;
    top: 0;

    display: flex;
    align-items: center;
    gap: 8px;

    width: 100%;
    padding: 20px;
    border-radius: ${({ theme }) => theme.borders.main};
`
interface Props {
    rent?: boolean;
}
export const Category = styled.div<Props>`
    padding: 3px 8px;
    font-size: 12px;
    text-align: center;
    background: ${props => props.rent ? ({ theme }) => theme.colors.primary : "#262937"};
    border-radius: ${({ theme }) => theme.borders.main};
`

export const TagPrice = styled.div`
    width: 100%;
    margin: 5px 0;

    font-weight: 400;
    font-size: 16px;
`

export const Thumbnail = styled.div`
    position: absolute;
    display: flex;

    width: 100%;
    height: 100%;

    overflow: hidden;
    border-radius: ${({ theme }) => theme.borders.main};

    img {
        object-fit: cover;
    }
`

export const Mask = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(38, 41, 55, 0.1), rgba(38, 41, 55, 0.3), rgba(38, 41, 55, 0.6), rgba(38, 41, 55, 0.9));
`

export const CardBody = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
`

export const Title = styled.div`
    font-size: 18px;
    font-weight: 500;
`

export const Address = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-top: 4px;
`

export const Resume = styled.ul`
    margin-top: 10px;
    max-width: 260px;
    display: flex;
    list-style-type: none;
    font-size: 14px;
    justify-content: space-between;

    svg {
        width: 18px;
        height: 18px;
    }

    li {
        display: flex;
        gap: 8px;
        align-items: center;

        :last-child {
            font-size: 16px;
        }
    }
`