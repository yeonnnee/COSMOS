import React from "react";

import { IPlanet, IPlanets } from "./DetailContainer";
import {
    Main,
    More,
    Section,
    Name,
    Desc,
    Intro,
    Img,
    Info,
    Column,
    Title,
    Text,
    SmallText,
    Planets,
    MorePlanets,
    PlanetLink,
    MoreText,
    PlanetName,
    SmallImg,
    IntroTitle,
    InfoSection,
} from "./styles";

interface IDatailProps {
    planet: undefined | IPlanet;
    planets: Array<IPlanets>;
    updatePlanet: (e: React.MouseEvent) => void;
}

const DetailPresenter: React.FunctionComponent<IDatailProps> = (
    detailProps
) => {
    const { planet, planets, updatePlanet } = detailProps;
    const orbitPeriod = planet?.orbitPeriod;

    return (
        <Main>
            <Section>
                <Intro>
                    <IntroTitle>
                        <Name>{planet?.name}</Name>
                        <SmallImg src={planet?.imgUrl} />
                    </IntroTitle>

                    <Desc>{planet?.detail}</Desc>
                    <More>
                        <MoreText>More</MoreText>
                        <Planets>
                            {planets.map((planet, index) => {
                                return (
                                    <PlanetLink
                                        to={`/cosmos/planets/${planet.name}`}
                                        key={index}
                                        id={planet.name}
                                        onClick={updatePlanet}
                                    >
                                        <MorePlanets src={planet.imgUrl} />
                                        <PlanetName>{planet.name}</PlanetName>
                                    </PlanetLink>
                                );
                            })}
                        </Planets>
                    </More>
                </Intro>
                <Img bgImg={planet?.imgUrl}></Img>
            </Section>
            <InfoSection>
                <Info>
                    {" "}
                    <Column>
                        <Title>Orbit Period</Title>
                        <Text>
                            {orbitPeriod
                                ? orbitPeriod.toString().split("(")[0]
                                : null}
                        </Text>

                        {orbitPeriod && orbitPeriod.toString().split("(")[1] ? (
                            <SmallText>
                                {"(" + orbitPeriod.toString().split("(")[1]}
                            </SmallText>
                        ) : null}
                    </Column>
                    <Column>
                        <Title>Length Of Day</Title>
                        <Text>{planet?.lengthOfDay}</Text>
                    </Column>
                    <Column>
                        <Title>Rotation Period</Title>
                        <Text>{planet?.rotationPeriod}</Text>
                    </Column>
                    <Column>
                        <Title>Surface Temperature</Title>
                        <Text>{planet?.surfaceTemperature}</Text>
                    </Column>
                    <Column>
                        <Title>Gravity</Title>
                        <Text>{planet?.gravity}</Text>
                    </Column>
                </Info>
            </InfoSection>
        </Main>
    );
};
export default DetailPresenter;
