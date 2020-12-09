import React, { useState } from "react";
import { DayValue } from "react-modern-calendar-datepicker";

import TicketsPresentation from "./TicketsPresentation";

export interface IOptions {
    departureDate: DayValue;
    lastDate: DayValue;
    departures: string;
    destination: string;
    passenger: string;
    loading: boolean;
    error: string;
}

const Tickets: () => JSX.Element = () => {
    const [options, setOptions] = useState<IOptions>({
        departureDate: null,
        lastDate: null,
        departures: "",
        destination: "",
        passenger: "",
        loading: false,
        error: "",
    });

    function selectDepartureDate(val: DayValue) {
        setOptions({
            ...options,
            departureDate: val,
        });
    }
    function selectLastDate(val: DayValue) {
        setOptions({
            ...options,
            lastDate: val,
        });
    }
    function selectDepartures(e: React.ChangeEvent<HTMLSelectElement>) {
        setOptions({
            ...options,
            departures: e.target.value,
        });
    }
    function selectDestination(e: React.ChangeEvent<HTMLSelectElement>) {
        setOptions({
            ...options,
            destination: e.target.value,
        });
    }
    function selectPassenger(e: React.ChangeEvent<HTMLSelectElement>) {
        setOptions({
            ...options,
            passenger: e.target.value,
        });
    }
    function search() {
        if (
            options.departures === "" ||
            options.destination === "" ||
            options.passenger === ""
        ) {
            setOptions({
                ...options,
                error: "Please fill out the blank",
            });
        }
        if (options.departureDate === null || options.lastDate === null) {
            setOptions({
                ...options,
                error: "Please select the date",
            });
        }
        console.log(options);
    }

    return (
        <TicketsPresentation
            options={options}
            selectDepartureDate={selectDepartureDate}
            selectLastDate={selectLastDate}
            selectDepartures={selectDepartures}
            selectDestination={selectDestination}
            selectPassenger={selectPassenger}
            search={search}
        />
    );
};

export default Tickets;
