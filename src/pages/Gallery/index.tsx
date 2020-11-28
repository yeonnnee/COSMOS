import React, { useEffect, useState } from "react";
import { nasaApi } from "../../api";

import GalleryPresenter from "./GalleryPresenter";

const Gallery: () => JSX.Element = () => {
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
    return <GalleryPresenter apod={apod} />;
};

export default Gallery;
