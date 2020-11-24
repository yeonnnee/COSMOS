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
        props.current === "true" ? "#3c6382" : "#6a89cc"};
    margin-left: 10px;
    &:hover {
        color: #3c6382;
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
                        to="/today"
                        current={
                            location.pathname === "/today" ? "true" : "false"
                        }
                    >
                        <NavItem>Today</NavItem>
                    </NavLink>
                    <NavLink
                        to="/planets"
                        current={
                            location.pathname === "/planets" ? "true" : "false"
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
