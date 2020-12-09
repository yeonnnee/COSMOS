import React from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IPlanets, Istate } from ".";
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

interface IPlanetsProps {
    state: Istate;
    getNextItem: () => void;
    getPrevItem: () => void;
    planets: Array<IPlanets>;
}

const PlanetsPresenter: React.FunctionComponent<IPlanetsProps> = (
    PlanetsProps
) => {
    const { state, getNextItem, getPrevItem, planets } = PlanetsProps;

    return (
        <Main>
            <Btn onClick={getPrevItem}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </Btn>
            <Carousel>
                <List left={state.left} ItemNum={planets.length}>
                    {planets.map((planet, index) => (
                        <BookLink
                            to={`/cosmos/planets/${planet.name}`}
                            key={index}
                        >
                            <Item>
                                <Img imgUrl={planet.imgUrl}></Img>
                                <Info>
                                    <Name>{planet.name}</Name>
                                    <Desc>{planet.desc}</Desc>
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

export default PlanetsPresenter;
