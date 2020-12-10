import React from "react";

import {
    SectionTitle,
    Desc,
    Main,
    Section,
    Date,
    Title,
    Img,
    Box,
    MoreImg,
    MoreSection,
} from "./styles";
import { Iapod } from "./index";

interface IHomeProps {
    apod: Iapod;
    pictures: Array<Iapod>;
}

const GalleryPresenter: React.FunctionComponent<IHomeProps> = (homeProps) => {
    const { apod, pictures } = homeProps;
    return (
        <>
            <Main>
                <Section>
                    <MoreSection>
                        {pictures.map((pic, index) => {
                            return (
                                <Box key={index} num={index + 1}>
                                    <MoreImg src={pic?.hdurl}></MoreImg>
                                </Box>
                            );
                        })}
                    </MoreSection>
                </Section>

                <Section>
                    <SectionTitle>
                        Astronomy Picture of the Day
                        <Date>{apod.date}</Date>
                    </SectionTitle>

                    <Title>{apod.title}</Title>
                    <Desc>{apod.explanation}</Desc>
                </Section>

                <Section>
                    <Img src={apod.hdurl} />
                </Section>
            </Main>
        </>
    );
};

export default GalleryPresenter;
