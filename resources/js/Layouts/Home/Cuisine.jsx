import React, { useState } from "react";
import coffee from "../../../../public/images/cuisinecoffee.jpg";
import martabak from "../../../../public/images/cuisinemartabak.jpg";
import baksosoto from "../../../../public/images/cuisinebaksosoto.jpg";
import snacks from "../../../../public/images/cuisinesnacks.jpg";
import bakery from "../../../../public/images/cuisinebakery.jpg";
import beverages from "../../../../public/images/cuisinebeverages.jpg";
import noodles from "../../../../public/images/cuisinenoodles.jpg";
import seafood from "../../../../public/images/cuisineseafood.jpg";
import fastfood from "../../../../public/images/cuisinefastfood.jpg";
import korean from "../../../../public/images/cuisinekorean.jpg";
import western from "../../../../public/images/cuisinewestern.jpg";
import pizzapasta from "../../../../public/images/cuisinepizzapasta.jpg";
import TitleHome from "@/Components/TitleHome";
import CuisineCard from "@/Components/CuisineCard";

const cuisineData = [
    { link: "coffee", image: coffee, text: "Coffee" },
    { link: "martabak", image: martabak, text: "Martabak" },
    { link: "baksosoto", image: baksosoto, text: "Bakso & Soto" },
    { link: "snacks", image: snacks, text: "Snacks" },
    { link: "bakery", image: bakery, text: "Bakery" },
    { link: "beverages", image: beverages, text: "Beverages" },
    { link: "noodles", image: noodles, text: "Noodles" },
    { link: "seafood", image: seafood, text: "Seafood" },
    { link: "fastfood", image: fastfood, text: "Fast Food" },
    { link: "korean", image: korean, text: "Korean" },
    { link: "western", image: western, text: "Western" },
    { link: "pizzapasta", image: pizzapasta, text: "Pizza & Pasta" },
];

const Cuisine = () => {
    const [showAll, setShowAll] = useState(false);

    const displayedCuisineData = showAll
        ? cuisineData
        : cuisineData.slice(0, 6);
    const buttonText = showAll ? "Show less cuisines" : "Show more cuisines";

    return (
        <div className="flex justify-center">
            <div className="mx-auto mt-16 max-w-7xl">
                <TitleHome text="Choose from cuisines" />
                <div className="mt-7 flex max-w-6xl flex-wrap justify-center gap-[1.4rem]">
                    {displayedCuisineData.map((item, index) => (
                        <div key={index}>
                            <CuisineCard
                                link={item.link}
                                image={item.image}
                                text={item.text}
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-7 flex justify-center">
                    <button
                        className={`inline-flex cursor-pointer items-center rounded-2xl bg-lightgreen px-5 py-2 text-center text-sm font-medium text-darkgreen hover:bg-lightgreenhover`}
                        onClick={() => setShowAll(!showAll)}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cuisine;
