import React, { useState } from "react";
import { DayValue } from "react-modern-calendar-datepicker";

import TicketsPresentation from "./TicketsPresentation";

const Tickets: () => JSX.Element = () => {
    const [departureDate, setDepartureDate] = useState<DayValue>(null);
    const [lastDate, setLastDate] = useState<DayValue>(null);

    function selectDepartureDate(e: DayValue) {
        setDepartureDate(e);
    }
    function selectLastDate(e: DayValue) {
        setLastDate(e);
    }
    return (
        <TicketsPresentation
            departureDate={departureDate}
            lastDate={lastDate}
            selectDepartureDate={selectDepartureDate}
            selectLastDate={selectLastDate}
        />
    );
};

export default Tickets;
