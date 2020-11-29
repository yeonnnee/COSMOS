import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Header from "./Header";

const Nav = styled.nav`
    width: 100%;
    height: 50px;
    padding: 20px;
    font-family: "Texturina", serif;
    display: ${(props: INav) => (props.show === "true" ? "none" : "flex")};
    justify-content: center;
`;
const NavList = styled.ul`
    display: flex;
`;
const NavItem = styled.li``;
const NavLink = styled(Link)`
    text-decoration: none;
    color: ${(props: ILink) =>
        props.current === "true" ? "#cf6a87" : "#f5f6fa"};
    margin-left: 10px;
    &:hover {
        color: #cf6a87;
    }
`;

interface ILink {
    current: string;
}

interface INav {
    show: string;
}

const Navigation = withRouter((navProps) => {
    const { location } = navProps;
    return (
        <>
            <Header />
            <Nav show={location.pathname === "/" ? "true" : "false"}>
                <NavList>
                    <NavLink
                        to="/cosmos/gallery"
                        current={
                            location.pathname === "/gallery" ? "true" : "false"
                        }
                    >
                        <NavItem>Gallery</NavItem>
                    </NavLink>
                    <NavLink
                        to="/cosmos/planets"
                        current={
                            location.pathname.includes("planets")
                                ? "true"
                                : "false"
                        }
                    >
                        <NavItem>Planets</NavItem>
                    </NavLink>
                </NavList>
            </Nav>
        </>
    );
});

export default Navigation;
