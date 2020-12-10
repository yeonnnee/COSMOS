import React from "react";

import { IPlanets } from ".";
import {
    Box,
    Planet,
    List,
    Main,
    Img,
    Info,
    Name,
    Desc,
    PlanetLink,
} from "./styles";

interface IPlanetsProps {
    planets: Array<IPlanets>;
}

const PlanetsPresenter: React.FunctionComponent<IPlanetsProps> = (
    PlanetsProps
) => {
    const { planets } = PlanetsProps;

    return (
        <Main>
            <Box>
                <List>
                    {planets.map((planet, index) => (
                        <PlanetLink
                            to={`/cosmos/planets/${planet.name}`}
                            key={index}
                            num={index + 1}
                        >
                            <Planet>
                                <Img imgUrl={planet.imgUrl}></Img>
                                <Info>
                                    <Name>{planet.name}</Name>
                                    <Desc>{planet.desc}</Desc>
                                </Info>
                            </Planet>
                        </PlanetLink>
                    ))}
                </List>
            </Box>
        </Main>
    );
};

export default PlanetsPresenter;
