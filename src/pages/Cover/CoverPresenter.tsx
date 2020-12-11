import React from "react";
import { Button, Desc, Greet, Main, Section, Title } from "./styles";

const CoverPresenter: () => JSX.Element = () => {
    return (
        <Main>
            <Section>
                <Greet>Welcome To</Greet>
                <Title>COSMOS</Title>
            </Section>
            <Section>
                <Desc>
                    Thanks to visit our website.
                    <br />
                    We Provide a Information about Space.
                </Desc>
            </Section>
            <Section>
                <Button to="/cosmos/gallery">Read More</Button>
            </Section>
        </Main>
    );
};

export default CoverPresenter;
