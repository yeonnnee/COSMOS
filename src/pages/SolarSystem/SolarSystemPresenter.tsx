import React from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Mercury from "../../img/mercury.png";
import Earth from "../../img/earth.jpg";
import Mars from "../../img/mars.jpg";
import Jupiter from "../../img/jupiter.jpg";
import Saturn from "../../img/saturn.jpg";
import Uranus from "../../img/uranus.jpg";
import Neptune from "../../img/neptune.jpg";
import Pluto from "../../img/pluto.jpg";
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
                    <Item>
                        <Img imgUrl={Mercury}></Img>
                        <Info>
                            <Name>MERCURY</Name>
                            <Desc>First planet from the Sun</Desc>
                        </Info>
                    </Item>
                    <Item>
                        <Img imgUrl={Earth}></Img>
                        <Info>
                            <Name>EARTH</Name>
                            <Desc>Second planet from the Sun</Desc>
                        </Info>
                    </Item>
                    <Item>
                        <Img imgUrl={Mars}></Img>
                        <Info>
                            <Name>MARS</Name>
                            <Desc>Third planet from the Sun</Desc>
                        </Info>
                    </Item>
                    <Item>
                        <Img imgUrl={Jupiter}></Img>
                        <Info>
                            <Name>JUPITER</Name>
                            <Desc>Fourth planet from the Sun</Desc>
                        </Info>
                    </Item>
                    <Item>
                        <Img imgUrl={Saturn}></Img>
                        <Info>
                            <Name> SATURN</Name>
                            <Desc>Fifth planet from the Sun</Desc>
                        </Info>
                    </Item>
                    <Item>
                        <Img imgUrl={Uranus}></Img>
                        <Info>
                            <Name>URANUS</Name>
                            <Desc>Sixth planet from the Sun</Desc>
                        </Info>
                    </Item>
                    <Item>
                        <Img imgUrl={Neptune}></Img>
                        <Info>
                            <Name>NEPTUNE</Name>
                            <Desc>Seventh planet from the Sun</Desc>
                        </Info>
                    </Item>
                    <Item>
                        <Img imgUrl={Pluto}></Img>
                        <Info>
                            <Name> PLUTO</Name>
                            <Desc>Eighth planet from the Sun</Desc>
                        </Info>
                    </Item>
                </List>
            </Carousel>
            <Btn onClick={getNextItem}>
                <FontAwesomeIcon icon={faAngleRight} />
            </Btn>
        </Main>
    );
};

export default SolarSystemPresneter;
