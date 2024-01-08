import Button from "@/Components/Button";
import React, { useEffect, useState } from "react";
import nullImg from "../../../../public/images/null.png";
import TitleHome from "@/Components/TitleHome";
import DataNotFound from "@/Components/DataNotFound";
import RestoCard from "@/Components/RestoCard";

const Resto = () => {
    const [resto, setResto] = useState([]);

    useEffect(() => {
        axios
            .get("/api/resto/all")
            .then((response) => {
                setResto(response.data.data);
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
                <TitleHome text="What’s good to eat around here?" />
                <p className="mx-auto mt-2 line-clamp-2 flex max-w-md justify-center text-center text-base  font-normal text-gray-800">
                    Discover our collection of popular dishes, local favorites,
                    and best deals in your neighborhood.
                </p>
                <div className="mt-7 flex max-w-6xl flex-wrap justify-center gap-6">
                    {resto.length > 0 ? (
                        resto.slice(0, 8).map((item) => (
                            <div key={item.id}>
                                <RestoCard
                                    name_resto={item.name_resto}
                                    slug_resto={item.slug_resto}
                                    cuisine_1_resto={item.cuisine_1_resto}
                                    cuisine_2_resto={item.cuisine_2_resto}
                                    cuisine_3_resto={item.cuisine_3_resto}
                                    regency_resto={item.regency_resto}
                                    city_resto={item.city_resto}
                                    star_resto={item.star_resto}
                                    nullImg={nullImg}
                                />
                            </div>
                        ))
                    ) : (
                        <DataNotFound />
                    )}
                </div>
                <div className="mt-7 flex justify-center">
                    <Button link="/resto" text="Show all restos" />
                </div>
            </div>
        </div>
    );
};

export default Resto;
