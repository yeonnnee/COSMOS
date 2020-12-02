import React, { useState } from "react";
import { DayValue } from "react-modern-calendar-datepicker";

import TicketsPresentation from "./TicketsPresentation";

const Tickets: () => JSX.Element = () => {
    const [departureDate, setDepartureDate] = useState<DayValue>(null);
    const [lastDate, setLastDate] = useState<DayValue>(null);
    const [departures, setDepartures] = useState("");
    const [destination, setDestination] = useState("");
    const [passenger, setPassenger] = useState("");

    function selectDepartureDate(val: DayValue) {
        setDepartureDate(val);
    }
    function selectLastDate(val: DayValue) {
        setLastDate(val);
    }

    function selectDepartures(e: React.ChangeEvent<HTMLSelectElement>) {
        setDepartures(e.target.value);
    }
    function selectDestination(e: React.ChangeEvent<HTMLSelectElement>) {
        setDestination(e.target.value);
    }
    function selectPassenger(e: React.ChangeEvent<HTMLSelectElement>) {
        setPassenger(e.target.value);
    }
    function searchTickets() {
        const data = {
            departures: departures,
            destination: destination,
            departureDate: departureDate,
            lastDate: lastDate,
            passenger: passenger,
        };
        console.log(data);
    }
    return (
        <TicketsPresentation
            departureDate={departureDate}
            lastDate={lastDate}
            selectDepartureDate={selectDepartureDate}
            selectLastDate={selectLastDate}
            selectDepartures={selectDepartures}
            selectDestination={selectDestination}
            selectPassenger={selectPassenger}
            searchTickets={searchTickets}
        />
    );
};

export default Tickets;
