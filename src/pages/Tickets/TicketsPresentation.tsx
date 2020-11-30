import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

import SearchTickets from "../SearchTickets";

const Main = styled.main`
    width: 100%;
    height: 100vh;
    padding: 200px;
    background-image: url(${(props: MainProps) => props.bgImg});
    background-size: cover;
`;
const Title = styled.div`
    font-family: "Castoro", serif;
    font-size: 50px;
    line-height: 1.3;
    text-align: center;
`;
const Text = styled.div`
    margin-top: 20px;
    text-align: center;
    line-height: 1.3;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;
const Search = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-template-rows: 1fr;
    gap: 10px;
    border: 1px solid white;
    margin-top: 50px;
`;
const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const SearchBtn = styled(Link)`
    width: 150px;
    height: 50px;
    margin-top: 20px;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    color: white;
`;
const Select = styled.select`
    width: 100%;
    margin-top: 20px;
    padding: 10px 0;
    background-color: rgba(158, 156, 156, 0.4);
`;
const Option = styled.option``;
const Label = styled.span``;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 9px;
`;
const Date = styled.div`
    width: 250px;
    border: 1px solid white;
    margin: 10px;
    height: 40px;
`;
interface MainProps {
    bgImg: string;
}

const TicketsPresentation: () => JSX.Element = () => {
    return (
        <Main bgImg="https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80">
            <Section>
                <Title>
                    Explore
                    <br /> Wonderful Space
                </Title>
                <Text>
                    Space travel is not dream anymore. <br />
                    Explore Space and feel Magnificence of the Nature
                </Text>
            </Section>

            <Search>
                <Column>
                    <Label>Departures</Label>
                    <Select>
                        <Option value=""></Option>
                        <Option value="MERCURY">MERCURY</Option>
                        <Option value="VENUS">VENUS</Option>
                        <Option value="EARTH">EARTH</Option>
                        <Option value="MARS">MARS</Option>
                        <Option value="JUPITER">JUPITER</Option>
                        <Option value="SATURN">SATURN</Option>
                        <Option value="URANUS">URANUS</Option>
                        <Option value="NEPTUNE">NEPTUNE</Option>
                        <Option value="PLUTO">PLUTO</Option>
                    </Select>
                </Column>
                <Column>
                    <Label>Destination</Label>
                    <Select>
                        <Option value=""></Option>
                        <Option value="MERCURY">MERCURY</Option>
                        <Option value="VENUS">VENUS</Option>
                        <Option value="EARTH">EARTH</Option>
                        <Option value="MARS">MARS</Option>
                        <Option value="JUPITER">JUPITER</Option>
                        <Option value="SATURN">SATURN</Option>
                        <Option value="URANUS">URANUS</Option>
                        <Option value="NEPTUNE">NEPTUNE</Option>
                        <Option value="PLUTO">PLUTO</Option>
                    </Select>
                </Column>
                <Column>
                    <Label>Date</Label>
                    <Wrapper>
                        <Date></Date>~<Date></Date>
                    </Wrapper>
                </Column>
            </Search>
            <Section>
                <SearchBtn to="/cosmos/tickets/search">Search</SearchBtn>
            </Section>
            <Section>
                <Route
                    path="/cosmos/tickets/search"
                    component={SearchTickets}
                />
            </Section>
        </Main>
    );
};

export default TicketsPresentation;
