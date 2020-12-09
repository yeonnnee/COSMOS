import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderSection = styled.header`
    width: 100%;
    height: 30px;
    padding: 20px;
    background-color: #181717;
    font-family: "Texturina", serif;
    display: ${(props: Iheader) => (props.show === "true" ? "none" : "flex")};
    justify-content: center;
    position: fixed;
    z-index: 1;
`;

const Text = styled.span`
    cursor: pointer;
    display: none;
`;

const Icon = styled(FontAwesomeIcon)`
    font-size: 20px;

    &:hover + ${Text} {
        display: block;
    }

    &:hover {
        display: none;
    }
`;

const Title = styled.div``;
const HeaderLink = styled(Link)`
    text-decoration: none;
    color: #f7f1e3;
`;

interface Iheader {
    show: string;
}

const Header: () => JSX.Element = () => {
    return (
        <HeaderSection show={location.pathname === "/" ? "true" : "false"}>
            <Title>
                <HeaderLink to="/cosmos/planets">
                    <Icon icon={faRocket} />
                    <Text>COSMOS</Text>
                </HeaderLink>
            </Title>
        </HeaderSection>
    );
};

export default Header;
