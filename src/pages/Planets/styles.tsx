import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

interface ImageProps {
    imgUrl: string;
}

interface LinkProps {
    num: number;
}

const PicSlide = keyframes`
    0% {
        transform:perspective(500px) rotateY(0deg);
    }
    100% {
        transform:perspective(500px) rotateY(360deg);
    }
`;

export const Main = styled.main`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: black;
`;
export const Carousel = styled.div`
    /* width: 1480px;
    overflow: hidden;
    position: relative;
    height: 500px;
    margin-top: 200px; */
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;
export const List = styled.div`
    width: 350px;
    height: 500px;
    position: relative;
    transform-style: preserve-3d;
    animation: ${PicSlide} 20s linear infinite;
`;

export const PlanetLink = styled(Link)`
    text-decoration: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(${(props: LinkProps) => props.num}*45deg))
        translateZ(800px);
`;

export const Info = styled.section`
    text-align: center;
    margin-top: 30px;
    display: none;
    transform: rotateY(180deg);
`;
export const Item = styled.div`
    /* border: 1px solid white; */
    padding: 10px;
    width: 100%;
    height: 100%;
    /* background-color: #d1ccc0; */
    background-color: black;
    cursor: pointer;
    &:hover ${Info} {
        display: block;
    }
`;

export const Img = styled.div`
    height: 330px;
    background-image: url(${(props: ImageProps) => props.imgUrl});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Btn = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        border: 2px solid #d1ccc0;
    }
`;

export const Name = styled.div`
    color: #5e5037;
    font-size: 20px;
    font-family: "Karla", sans-serif;
    font-weight: bold;
    letter-spacing: 2px;
`;
export const Desc = styled.div`
    font-size: 18px;
    line-height: 1.5;
    color: #747069;
    margin-top: 20px;
    font-family: "Caveat", cursive;
`;
