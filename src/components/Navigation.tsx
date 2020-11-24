import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";

const Header = styled.header`
    width: 100%;
    height: 150px;
    padding: 20px;
    display: ${(props: Iheader) => (props.show === "true" ? "none" : "flex")};
    align-items: flex-start;
`;
const Title = styled.span``;
const Nav = styled.nav``;
const NavList = styled.ul``;
const NavItem = styled.li``;
const NavLink = styled(Link)`
    text-decoration: none;
    color: ${(props: Inav) =>
        props.current === "true" ? "#3c6382" : "#6a89cc"};
    font-family: "Texturina", serif;
    margin-left: 10px;
    &:hover {
        color: #3c6382;
    }
`;

interface Inav {
    current: string;
}
interface Iheader {
    show: string;
}

const Navigation = withRouter((navProps) => {
    const { location } = navProps;
    return (
        <Header show={location.pathname === "/" ? "true" : "false"}>
            <Title> PLANET</Title>
            <Nav>
                <NavList>
                    <NavLink
                        to="/today"
                        current={
                            location.pathname === "/today" ? "true" : "false"
                        }
                    >
                        <NavItem>Today</NavItem>
                    </NavLink>
                </NavList>
            </Nav>
        </Header>
    );
});

export default Navigation;
