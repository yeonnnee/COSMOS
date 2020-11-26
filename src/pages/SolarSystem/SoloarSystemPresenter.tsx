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
    grid-template-columns: repeat(8, 350px);
    grid-template-rows: 500px;
    gap: 20px;
    left: ${(props: ILeft) => -props.left + `px`};
    transition: left 0.5s ease-out;
`;

const Item = styled.li`
    border: 1px solid white;
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
    currentGroup: number;
    left: number;
    max: boolean;
}

interface IProps {
    state: Istate;
    getNextItem: () => void;
}

const SolarSystemPresneter: React.FunctionComponent<IProps> = (
    solarSystemProps
) => {
    const { state, getNextItem } = solarSystemProps;

    return (
        <Main>
            <PreBtn>
                <FontAwesomeIcon icon={faAngleLeft} />
            </PreBtn>
            <Carousel>
                <List left={state.left}>
                    <Item>MERCURY</Item>
                    <Item>EARTH</Item>
                    <Item>MARS</Item>
                    <Item>JUPITER</Item>
                    <Item>SATURN</Item>
                    <Item>URANUS</Item>
                    <Item>NEPTUNE</Item>
                    <Item>PLUTO</Item>
                </List>
            </Carousel>
            <NextBtn onClick={getNextItem}>
                <FontAwesomeIcon icon={faAngleRight} />
            </NextBtn>
        </Main>
    );
};

export default SolarSystemPresneter;
