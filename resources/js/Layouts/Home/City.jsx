import Button from "@/Components/Button";
import DataNotFound from "@/Components/DataNotFound";
import TitleHome from "@/Components/TitleHome";
import React, { useEffect, useState } from "react";

const City = () => {
    const [city, setCity] = useState([]);

    useEffect(() => {
        axios
            .get("/api/city/all")
            .then((response) => {
                setCity(response.data.data);
            })
            .catch((error) => {
                toast(`Terjadi kesalahan: ${error}`, {
                    type: "error",
                    theme: "light",
                });
            });
    }, []);

    return (
        <div className="flex justify-center">
            <div className="mx-auto mt-16 max-w-7xl">
                <TitleHome text="Cities with Savora" />
                <div className="mt-7 flex max-w-6xl flex-wrap justify-center gap-6">
                    {city.length > 0 ? (
                        city.slice(0, 16).map((item) => (
                            <a
                                key={item.id}
                                href={item.slug_city}
                                className="rounded-full border border-gray-300 hover:bg-lightgreen"
                            >
                                <div className="px-5 py-2">
                                    <p className="line-clamp-1 w-52 text-center text-sm font-semibold text-darkgreen">
                                        {item.name_city}
                                    </p>
                                </div>
                            </a>
                        ))
                    ) : (
                        <DataNotFound />
                    )}
                </div>
                <div className="mt-7 flex justify-center">
                    <Button text="Show all cities" />
                </div>
            </div>
        </div>
    );
};

export default City;
