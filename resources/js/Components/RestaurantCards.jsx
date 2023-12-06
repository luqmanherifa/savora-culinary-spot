import React, { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";

const RestaurantCards = () => {
    const [restaurant, setRestaurant] = useState([]);

    useEffect(() => {
        axios.get("/api/restaurant").then((response) => {
            setRestaurant(response.data.data);
        });
    }, []);

    return (
        <>
            {restaurant.length > 0 ? (
                restaurant.map((item) => (
                    <div key={item.id}>
                        <RestaurantCard
                            id={item.id}
                            name_restaurant={item.name_restaurant}
                            address_restaurant={item.address_restaurant}
                            district_restaurant={item.district_restaurant}
                            star_restaurant={item.star_restaurant}
                            rating_restaurant={item.rating_restaurant}
                        />
                    </div>
                ))
            ) : (
                <div className="py-4 font-medium text-red-500 lg:text-center">
                    Data not available.
                </div>
            )}
        </>
    );
};

export default RestaurantCards;
