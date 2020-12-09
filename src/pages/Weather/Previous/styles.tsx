import styled from "styled-components";

export const Previous = styled.section`
    padding: 20px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    place-items: center;
    text-align: center;
    color: black;
`;
export const Item = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`;

export const PrevDate = styled.div`
    font-family: "Texturina", serif;
    margin-top: 5px;
`;

export const More = styled.button`
    outline: none;
    border: none;
    box-shadow: 1px 1px 3px black;
    /* background-color: #503c42; */
    color: black;
    padding: 2px 10px;
    transform: translateY(20px);
    border-radius: 3px;
    font-family: "Karla", sans-serif;
    font-size: 15px;
    cursor: pointer;
    &:hover {
        box-shadow: 2px 2px 3px black;
    }
`;
