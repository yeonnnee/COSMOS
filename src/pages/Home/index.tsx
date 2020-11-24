import React, { useEffect, useState } from "react";
import { nasaApi } from "../../api";

import HomePresenter from "./HomePresenter";

const Home: () => JSX.Element = () => {
    const [apod, setApod] = useState({
        date: "",
        explanation: "",
        hdurl: "",
        title: "",
    });

    async function FetchData() {
        try {
            const res = await nasaApi.apod();
            setApod({
                date: res.data.date,
                explanation: res.data.explanation,
                hdurl: res.data.hdurl,
                title: res.data.title,
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        FetchData();
    }, []);
    return <HomePresenter apod={apod} />;
};

export default Home;
