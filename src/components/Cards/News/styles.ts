import styled from "styled-components";
import Link from 'next/link';

export const Container = styled(Link)`
    position: relative;
    display: flex;
    flex-direction: column;

    width: 316px;
    height: 316px;
    border: 0.5px solid #e0e0e0;
    border-radius: ${({ theme }) => theme.borders.main};
`
export const CardHeader = styled.div`
    width: 100%;
`
export const Thumbnail = styled.div`
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borders.main};
    position: absolute;
    z-index: -10;
    overflow: hidden;

    img {
        transition: .2s;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const Mask = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(38, 38, 38, 0) 0%, rgba(38, 38, 38, 0) 25%, rgba(38, 38, 38, 0.8) 80%, rgba(38, 38, 38, 0.9) 100%);
`
export const CardBody = styled.div`
    width: 100%;
    padding: 10px 20px;
    position: relative;
    top: 45%;
    color: #fafafa;
`

export const SubTitle = styled.h4`
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 400;
    color: gold;
`
export const Title = styled.h1`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`
export const Description = styled.p`
    font-size: 16px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`