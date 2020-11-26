import React from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Carousel, Item, List, Main, Btn } from "./styles";
interface Istate {
    currentGroup: number;
    left: number;
    max: boolean;
    min: boolean;
}

interface IProps {
    state: Istate;
    getNextItem: () => void;
    getPrevItem: () => void;
}

const SolarSystemPresneter: React.FunctionComponent<IProps> = (
    solarSystemProps
) => {
    const { state, getNextItem, getPrevItem } = solarSystemProps;

    return (
        <Main>
            <Btn onClick={getPrevItem}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </Btn>
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
            <Btn onClick={getNextItem}>
                <FontAwesomeIcon icon={faAngleRight} />
            </Btn>
        </Main>
    );
};

export default SolarSystemPresneter;
