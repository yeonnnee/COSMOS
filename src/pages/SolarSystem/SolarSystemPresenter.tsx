import React from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/planets.json";
import {
    Carousel,
    Item,
    List,
    Main,
    Btn,
    Img,
    Info,
    Name,
    Desc,
    BookLink,
} from "./styles";

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
                    {data.map((planet, index) => (
                        <BookLink to={`/planets/${planet.name}`} key={index}>
                            <Item>
                                <Img imgUrl={planet.imgUrl}></Img>
                                <Info>
                                    <Name>{planet.name}</Name>
                                    <Desc>{planet.Desc}</Desc>
                                </Info>
                            </Item>
                        </BookLink>
                    ))}
                </List>
            </Carousel>
            <Btn onClick={getNextItem}>
                <FontAwesomeIcon icon={faAngleRight} />
            </Btn>
        </Main>
    );
};

export default SolarSystemPresneter;
