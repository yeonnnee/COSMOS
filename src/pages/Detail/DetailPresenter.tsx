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
    detail: string;
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

interface IImageProps {
    bgImg: string;
}

const Main = styled.main`
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: black;
    font-family: "Caveat", cursive;
`;
const Section = styled.section`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;
const Img = styled.div`
    width: 100%;
    background-image: url(${(props: IImageProps) => props.bgImg});
    background-size: cover;
`;
const Intro = styled.div`
    margin-top: 20%;
`;
const Name = styled.div`
    font-family: "Texturina", serif;
    font-size: 35px;
    color: #f1c40f;
`;
const Desc = styled.div`
    font-family: "Karla", sans-serif;
    width: 100%;
    padding: 18px;
    line-height: 1.5;
    font-size: 18px;
    opacity: 0.7;
`;
const Info = styled.section`
    width: 97%;
    border: 1px solid white;
    border-radius: 20px;
    background-color: rgb(0, 0, 0);
    background-color: rgba(158, 156, 156, 0.4);
    color: white;
    position: fixed;
    bottom: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    gap: 5px;
`;
const Column = styled.div`
    width: 100%;
    padding: 0 10px;
`;
const Title = styled.div`
    font-family: "Texturina", serif;
    text-align: center;
    padding: 10px 0;
    width: 100%;
    border-bottom: 1px solid white;
    font-size: 20px;
`;
const Text = styled.div`
    width: 100%;
    text-align: center;
    font-size: 30px;
    padding: 25px;
`;
const SmallText = styled.div`
    width: 100%;
    text-align: center;
    font-size: 20px;
    position: relative;
    top: -18px;
    opacity: 0.7;
`;

const DetailPresenter: React.FunctionComponent<IDatailProps> = (
    detailProps
) => {
    const { planet } = detailProps;
    return (
        <Main>
            <Section>
                <Intro>
                    <Name>{planet[0].name}</Name>
                    <Desc>{planet[0].detail}</Desc>
                </Intro>
                <Img bgImg={planet[0].imgUrl}></Img>
            </Section>
            <Info>
                <Column>
                    <Title>Orbit Period</Title>
                    <Text>
                        {planet[0].OrbitPeriod.toString().split("(")[0]}
                    </Text>

                    {planet[0].OrbitPeriod.toString().split("(")[1] ? (
                        <SmallText>
                            {"(" +
                                planet[0].OrbitPeriod.toString().split("(")[1]}
                        </SmallText>
                    ) : null}
                </Column>
                <Column>
                    <Title>Length Of Day</Title>
                    <Text>{planet[0].lengthOfDay}</Text>
                </Column>
                <Column>
                    <Title>Rotation Period</Title>
                    <Text>{planet[0].RotationPeriod}</Text>
                </Column>
                <Column>
                    <Title>Surface Temperature</Title>
                    <Text>{planet[0].SurfaceTemperature}</Text>
                </Column>
                <Column>
                    <Title>Gravity</Title>
                    <Text>{planet[0].gravity}</Text>
                </Column>
            </Info>
        </Main>
    );
};
export default DetailPresenter;