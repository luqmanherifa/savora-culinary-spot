import Button from "@/Components/Button";
import CityCard from "@/Components/CityCard";
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
                            <div key={item.id}>
                                <CityCard
                                    name_city={item.name_city}
                                    slug_city={item.slug_city}
                                />
                            </div>
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
