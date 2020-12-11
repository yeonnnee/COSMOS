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
import Loader from "../../components/Loader";

interface IHomeProps {
    apod: Iapod;
    selectItem: (e: React.MouseEvent) => void;
}

const GalleryPresenter: React.FunctionComponent<IHomeProps> = (homeProps) => {
    const { apod, selectItem } = homeProps;

    return (
        <>
            {apod.loading ? (
                <Loader />
            ) : (
                <Main>
                    <Section>
                        <MoreSection>
                            {apod.pictures.map((pic, index) => {
                                return (
                                    <Box
                                        key={index}
                                        num={index + 1}
                                        onClick={selectItem}
                                        id={pic.date}
                                    >
                                        <MoreImg src={pic?.hdurl} />
                                    </Box>
                                );
                            })}
                        </MoreSection>
                    </Section>

                    <Section>
                        <SectionTitle>
                            Astronomy Picture of the Day
                            <Date>{apod.selected.date}</Date>
                        </SectionTitle>

                        <Title>{apod.selected.title}</Title>
                        <Desc>{apod.selected.explanation}</Desc>
                    </Section>

                    <Section>
                        <Img src={apod.selected.hdurl} />
                    </Section>
                </Main>
            )}
        </>
    );
};

export default GalleryPresenter;
