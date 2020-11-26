import styled from "styled-components";

interface IMove {
    left: number;
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

export const Item = styled.li`
    border: 1px solid white;
`;
export const Btn = styled.span`
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 30px;
    cursor: pointer;
    &:hover {
        border: 2px solid #ffeaa7;
    }
`;
