import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/03/UniverseShape_LedeFullWidth.jpg");
    background-size: cover;
`;

export const Greet = styled.span`
    font-family: "Raleway", sans-serif;
    font-size: 30px;
`;

export const Title = styled.div`
    font-family: "Texturina", serif;
    font-size: 80px;
`;
export const Section = styled.section`
    text-align: center;
    margin: 20px 0;
`;
export const Desc = styled.div`
    line-height: 1.3;
`;

export const Button = styled(Link)`
    text-decoration: none;
    font-family: "Raleway", sans-serif;
    padding: 15px 35px;
    font-size: 15px;
    font-weight: bold;
    outline: none;
    background: none;
    border: 1px solid #fffa65;
    color: #fffa65;
    cursor: pointer;
    &:hover {
        border: 1px solid #f7f1e3;
        color: #f7f1e3;
    }
    &:active {
        border: none;
        background-color: #f7f1e3;
        color: #181717;
    }
`;
