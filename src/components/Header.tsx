import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderSection = styled.header`
    width: 100%;
    height: 30px;
    padding: 20px;
    font-family: "Texturina", serif;
    display: ${(props: Iheader) => (props.show === "true" ? "none" : "flex")};
    justify-content: center;
`;

const Icon = styled(FontAwesomeIcon)`
    font-size: 20px;
    display: none;
`;

const Text = styled.span`
    cursor: pointer;
    &:hover + ${Icon} {
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
                <HeaderLink to="/today">
                    <Text>COSMOS</Text>
                    <Icon icon={faRocket} />
                </HeaderLink>
            </Title>
        </HeaderSection>
    );
};

export default Header;
