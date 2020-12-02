import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface MainProps {
    bgImg: string;
}

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    padding: 200px;
    background-image: url(${(props: MainProps) => props.bgImg});
    background-size: cover;
    display: grid;
    grid-template-rows: repeat(4 1fr);
`;

export const Title = styled.div`
    font-family: "Castoro", serif;
    font-size: 50px;
    line-height: 1.3;
    text-align: center;
`;
export const Text = styled.div`
    margin-top: 20px;
    text-align: center;
    line-height: 1.3;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;
export const Search = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 1fr;
    gap: 30px;
    margin-top: 50px;
    border: 1px solid white;
    @media only screen and (max-width: 850px) {
        padding: 20px 40px;
    }
`;
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Texturina", serif;
`;
export const SearchBtn = styled(Link)`
    width: 150px;
    height: 50px;
    margin-top: 20px;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    color: white;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    &:hover {
        background-color: rgba(158, 156, 156, 0.4);
    }
`;
export const Select = styled.select`
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    background-color: rgba(158, 156, 156, 0.4);
    font-family: "Raleway", sans-serif;
    color: #f1c40f;
    font-size: 15px;
    font-weight: bold;
    &:hover {
        border: 1px solid white;
    }
`;
export const Option = styled.option`
    color: #2980b9;
    font-weight: bold;
`;
export const Label = styled.span``;
export const Icon = styled(FontAwesomeIcon)`
    margin-left: 10px;
`;
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 9px;
    width: 100%;
`;
export const Date = styled.div`
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 5px;
    margin-top: 12px;
    cursor: default;
    background-color: rgba(158, 156, 156, 0.4);
    &:hover {
        border: 1px solid white;
    }
`;
export const Span = styled.span`
    padding: 0 10px;
    font-size: 15px;
    font-weight: bold;
`;
