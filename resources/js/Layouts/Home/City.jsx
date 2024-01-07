import Button from "@/Components/Button";
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
                <h3 className="mb-7 flex justify-center text-2xl font-semibold text-gray-800">
                    Cities with Savora
                </h3>
                <div className="flex max-w-6xl flex-wrap justify-center gap-6">
                    {city.length > 0 ? (
                        city.slice(0, 20).map((item) => (
                            <a
                                key={item.id}
                                href={item.slug_city}
                                className="rounded-full border border-gray-300 hover:bg-lightgreen"
                            >
                                <div className="px-5 py-3">
                                    <p className="line-clamp-1 w-52 text-lg font-semibold text-darkgreen">
                                        {item.name_city}
                                    </p>
                                </div>
                            </a>
                        ))
                    ) : (
                        <div className="py-4 font-medium text-red-500 lg:text-center">
                            Data not found.
                        </div>
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
