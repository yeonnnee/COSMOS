import React from "react";

import { SectionTitle, Desc, Main, Section, Date, Title, Img } from "./styles";

interface Iapod {
    date: string;
    explanation: string;
    hdurl: string;
    title: string;
}
interface IHomeProps {
    apod: Iapod;
}

const GalleryPresenter: React.FunctionComponent<IHomeProps> = (homeProps) => {
    const { apod } = homeProps;
    return (
        <Main>
            <Section>
                <SectionTitle>
                    Astronomy Picture of the Day
                    <Date>{apod.date}</Date>
                </SectionTitle>
            </Section>

            <Section>
                <Title>{apod.title}</Title>
                <Desc>{apod.explanation}</Desc>
            </Section>

            <Section>
                <Img src={apod.hdurl} />
            </Section>
        </Main>
    );
};

export default GalleryPresenter;
