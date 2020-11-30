import React, { useState } from "react";
import { DayValue } from "react-modern-calendar-datepicker";

import TicketsPresentation from "./TicketsPresentation";

const Tickets: () => JSX.Element = () => {
    const [departureDate, setDepartureDate] = useState<DayValue>(null);
    const [lastDate, setLastDate] = useState<DayValue>(null);
    const [departures, setDepartures] = useState("");
    const [destination, setDestination] = useState("");

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
    return (
        <TicketsPresentation
            departureDate={departureDate}
            lastDate={lastDate}
            selectDepartureDate={selectDepartureDate}
            selectLastDate={selectLastDate}
            selectDepartures={selectDepartures}
            selectDestination={selectDestination}
        />
    );
};

export default Tickets;
