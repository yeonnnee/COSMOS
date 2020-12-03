import React from "react";

import { IPlanet } from "./index";
import {
    Main,
    Section,
    Name,
    Desc,
    Intro,
    BuyBtn,
    Img,
    Info,
    Column,
    Title,
    Text,
    SmallText,
} from "./styles";
interface IDatailProps {
    planet: undefined | IPlanet;
}

const DetailPresenter: React.FunctionComponent<IDatailProps> = (
    detailProps
) => {
    const { planet } = detailProps;
    const orbitPeriod = planet?.orbitPeriod;

    return (
        <Main>
            <Section>
                <Intro>
                    <Name>{planet?.name}</Name>
                    <Desc>{planet?.detail}</Desc>
                    <BuyBtn to="/cosmos/tickets">Buy Ticket</BuyBtn>
                </Intro>
                <Img bgImg={planet?.imgUrl}></Img>
            </Section>
            <Info>
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
        </Main>
    );
};
export default DetailPresenter;
