import styled from "styled-components";

export const Main = styled.main`
    margin-top: 50px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
`;
export const Section = styled.section`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:nth-child(2) {
        border: 1px solid #f7f1e3;
    }
`;

export const Img = styled.img`
    width: 100%;
    box-shadow: 10px 10px 10px black, 0px 0px 10px black;
`;
export const SectionTitle = styled.div`
    font-family: "Texturina", serif;
    font-size: 22px;
`;

export const Desc = styled.div`
    font-family: "Karla", sans-serif;
    margin-bottom: 20px;
    line-height: 1.3;
`;

export const Title = styled.div`
    font-family: "Karla", sans-serif;
    font-size: 18px;
    font-style: italic;
    margin-bottom: 20px;
`;
export const Date = styled.div`
    font-size: 15px;
    margin-top: 20px;
`;
