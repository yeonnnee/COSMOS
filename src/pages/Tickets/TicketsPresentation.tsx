import React from "react";
import { Route } from "react-router-dom";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { DayValue } from "react-modern-calendar-datepicker";
import {
    faMapMarkerAlt,
    faCalendarCheck,
    faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";

import SearchTickets from "../SearchTickets";
import {
    Main,
    Section,
    Title,
    Text,
    Search,
    Column,
    Label,
    Select,
    Option,
    Icon,
    Date,
    Wrapper,
    Span,
    SearchBtn,
} from "./styles";

interface TicketsPresentationProps {
    departureDate: DayValue;
    lastDate: DayValue;
    selectDepartureDate: (val: DayValue) => void;
    selectLastDate: (val: DayValue) => void;
    selectDepartures: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    selectDestination: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    selectPassenger: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    searchTickets: () => void;
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
        selectPassenger,
        searchTickets,
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
                    <Label>
                        Date
                        <Icon icon={faCalendarCheck} />
                    </Label>
                    <Wrapper>
                        <Date>
                            <DatePicker
                                value={departureDate}
                                onChange={selectDepartureDate}
                                calendarClassName="responsive-calendar"
                                shouldHighlightWeekends
                                inputPlaceholder="From.."
                            />
                        </Date>
                        <Span>~</Span>
                        <Date>
                            <DatePicker
                                value={lastDate}
                                onChange={selectLastDate}
                                calendarClassName="responsive-calendar"
                                shouldHighlightWeekends
                                inputPlaceholder="To.."
                            />
                        </Date>
                    </Wrapper>
                </Column>
                <Column>
                    <Label>
                        Passenger <Icon icon={faUserAstronaut} />
                    </Label>
                    <Select onChange={selectPassenger}>
                        <Option value=""></Option>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                        <Option value="6">6</Option>
                        <Option value="7">7</Option>
                        <Option value="8">8</Option>
                        <Option value="9">9</Option>
                    </Select>
                </Column>
            </Search>
            <Section>
                <SearchBtn to="/cosmos/tickets/search" onClick={searchTickets}>
                    Search
                </SearchBtn>
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
