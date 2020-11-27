import React from "react";
import styled from "styled-components";

interface IDiameter {
    EquatorialDiameter: string;
    PolarDiameter: string;
}

interface IPlanet {
    id: number;
    name: string;
    imgUrl: string;
    Desc: string;
    Mass: string;
    Diameter: string | IDiameter;
    OrbitPeriod: string;
    lengthOfDay: string;
    RotationPeriod: string;
    gravity: string;
    SurfaceTemperature: string;
}

interface IDatailProps {
    planet: Array<IPlanet>;
}

const Main = styled.main`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit);
`;
const Section = styled.section``;

const DetailPresenter: React.FunctionComponent<IDatailProps> = (
    detailProps
) => {
    const { planet } = detailProps;
    return (
        <Main>
            <Section>{planet[0].name}</Section>
        </Main>
    );
};
export default DetailPresenter;
