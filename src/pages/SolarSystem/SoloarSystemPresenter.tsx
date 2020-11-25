import React from "react";
import styled from "styled-components";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = styled.main`
    padding: 20px;
    margin-top: 150px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const Carousel = styled.div`
    width: 1480px;
    overflow: hidden;
    position: relative;
    height: 500px;
`;
const List = styled.ul`
    position: absolute;
    display: grid;
    grid-template-columns: repeat(9, 350px);
    grid-template-rows: 500px;
    gap: 20px;
    left: ${(props: ILeft) => -props.left + `px`};
    transition: left 0.5s ease-out;
`;

const Item = styled.li`
    border: 1px solid white;
    width: 100%;
`;
const PreBtn = styled.span`
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 30px;
    cursor: pointer;
    &:hover {
        border: 1px solid #fab1a0;
    }
`;
const NextBtn = styled.span`
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 30px;
    cursor: pointer;
    &:hover {
        border: 1px solid #fab1a0;
    }
`;

interface ILeft {
    left: number;
}

interface Istate {
    currentIndex: number;
    ItemList: number;
    left: number;
}

interface IPlanet {
    name: string;
}

interface IProps {
    state: Istate;
    getNextItem: () => void;
    planets: Array<IPlanet>;
}

const SolarSystemPresneter: React.FunctionComponent<IProps> = (
    solarSystemProps
) => {
    const { state, getNextItem, planets } = solarSystemProps;
    console.log(planets);
    return (
        <Main>
            <PreBtn>
                <FontAwesomeIcon icon={faAngleLeft} />
            </PreBtn>
            <Carousel>
                <List left={state.left}>
                    {planets.map((planet, index) => (
                        <Item key={index}>{planet.name}</Item>
                    ))}
                </List>
            </Carousel>
            <NextBtn onClick={getNextItem}>
                <FontAwesomeIcon icon={faAngleRight} />
            </NextBtn>
        </Main>
    );
};

export default SolarSystemPresneter;
