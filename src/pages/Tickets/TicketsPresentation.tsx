import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { DayValue } from "react-modern-calendar-datepicker";
import {
    faMapMarkerAlt,
    faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

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

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;
const Search = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-template-rows: auto;
    gap: 20px;
    margin-top: 50px;
    border: 1px solid white;
`;
const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: "Texturina", serif;
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
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    &:hover {
        background-color: rgba(158, 156, 156, 0.4);
    }
`;
const Select = styled.select`
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    background-color: rgba(158, 156, 156, 0.4);
    font-family: "Raleway", sans-serif;
    color: #f1c40f;
    font-size: 15px;
    font-weight: bold;
    &:hover {
        border: 1px solid white;
    }
`;
const Option = styled.option`
    color: #2980b9;
    font-weight: bold;
`;
const Label = styled.span``;
const Icon = styled(FontAwesomeIcon)`
    margin-left: 10px;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 9px;
    width: 100%;
`;
const Date = styled.div`
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 5px;
    margin-top: 10px;
    cursor: default;
    background-color: rgba(158, 156, 156, 0.4);
    &:hover {
        border: 1px solid white;
    }
`;
const Span = styled.span`
    padding: 0 10px;
    font-size: 15px;
    font-weight: bold;
`;

interface MainProps {
    bgImg: string;
}

interface TicketsPresentationProps {
    departureDate: DayValue;
    lastDate: DayValue;
    selectDepartureDate: (val: DayValue) => void;
    selectLastDate: (val: DayValue) => void;
    selectDepartures: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    selectDestination: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const TicketsPresentation: React.FunctionComponent<TicketsPresentationProps> = (
    TicketsProps
) => {
    const {
        departureDate,
        lastDate,
        selectDepartureDate,
        selectLastDate,
        selectDepartures,
        selectDestination,
    } = TicketsProps;

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
                    <Label>
                        Departures
                        <Icon icon={faMapMarkerAlt} />
                    </Label>
                    <Select onChange={selectDepartures}>
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
                    <Label>
                        Destination
                        <Icon icon={faMapMarkerAlt} />
                    </Label>
                    <Select onChange={selectDestination}>
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
                        <Date>
                            <DatePicker
                                value={departureDate}
                                onChange={selectDepartureDate}
                                calendarClassName="responsive-calendar"
                                shouldHighlightWeekends
                            />
                            <Icon icon={faCalendarCheck} />
                        </Date>
                        <Span>~</Span>
                        <Date>
                            <DatePicker
                                value={lastDate}
                                onChange={selectLastDate}
                                calendarClassName="responsive-calendar"
                                shouldHighlightWeekends
                            />
                            <Icon icon={faCalendarCheck} />
                        </Date>
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
