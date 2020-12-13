import React, { useEffect, useState } from "react";
import { getApod } from "../../api";

import GalleryPresenter from "./GalleryPresenter";

interface Pic {
    date: string;
    explanation: string;
    hdurl: string;
    title: string;
}
export interface Iapod {
    loading: boolean;
    selected: Pic;
    pictures: Array<Pic>;
}

const Gallery: () => JSX.Element = () => {
    const [apod, setApod] = useState<Iapod>({
        loading: true,
        selected: { date: "", explanation: "", hdurl: "", title: "" },
        pictures: [],
    });

    function selectItem(e: React.MouseEvent) {
        const target = e.currentTarget.id;
        const selectedItem = apod.pictures.find((pic) => pic.date === target);
        setApod({
            loading: false,
            selected: selectedItem ? selectedItem : apod.selected,
            pictures: apod.pictures,
        });
    }
    async function FetchData() {
        try {
            // get todays' pic
            const res = await getApod();

            const apod = {
                date: res.data.date,
                explanation: res.data.explanation,
                hdurl: res.data.hdurl,
                title: res.data.title,
            };

            // I picked several pics which i liked //
            const dates = [
                "2020-11-06",
                "2020-11-09",
                "2020-11-13",
                "2020-11-16",
                "2020-11-17",
                "2020-11-25",
                "2020-11-26",
                "2020-11-28",
                "2020-12-10",
            ];

            const pictures = [];
            for (let i = 0; i < dates.length; i++) {
                const result = await getApod(dates[i]);
                const pic = {
                    date: result.data.date,
                    explanation: result.data.explanation,
                    hdurl: result.data.hdurl,
                    title: result.data.title,
                };
                pictures.push(pic);
            }

            setApod({
                loading: false,
                selected: apod,
                pictures: [...pictures, apod],
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        FetchData();
    }, []);
    return <GalleryPresenter apod={apod} selectItem={selectItem} />;
};

export default Gallery;
