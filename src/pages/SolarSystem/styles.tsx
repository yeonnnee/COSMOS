import styled from "styled-components";
import { Link } from "react-router-dom";
interface IMove {
    left: number;
}

interface ImageProps {
    imgUrl: string;
}

export const Main = styled.main`
    padding: 20px;
    margin-top: 150px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
export const Carousel = styled.div`
    width: 1480px;
    overflow: hidden;
    position: relative;
    height: 500px;
`;
export const List = styled.ul`
    position: absolute;
    display: grid;
    grid-template-columns: repeat(8, 350px);
    grid-template-rows: 500px;
    gap: 20px;
    left: ${(props: IMove) => props.left + `px`};
    transition: left 0.5s ease-out;
`;
export const BookLink = styled(Link)`
    text-decoration: none;
`;

export const Item = styled.li`
    border: 1px solid white;
    padding: 10px;
    width: 100%;
    height: 100%;
    background-color: #d1ccc0;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    cursor: pointer;
    &:hover {
        background-color: black;
        /* display: block; */
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

export const Info = styled.section`
    text-align: center;
    margin-top: 30px;
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
