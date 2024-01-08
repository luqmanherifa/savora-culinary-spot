import React from "react";
import bestSellers from "../../../../public/images/inspobestsellers.png";
import budgetMeal from "../../../../public/images/inspobudgetmeal.png";
import healthyFood from "../../../../public/images/inspohealthyfood.png";
import mostLoved from "../../../../public/images/inspomostloved.png";
import nearMe from "../../../../public/images/insponearme.png";
import tfHours from "../../../../public/images/inspotfhours.png";
import TitleHome from "@/Components/TitleHome";
import InspoCard from "@/Components/InspoCard";

const inspoData = [
    {
        link: "nearme",
        image: nearMe,
        text: "Near Me",
    },
    {
        link: "bestsellers",
        image: bestSellers,
        text: "Best Sellers",
    },
    {
        link: "budgetmeal",
        image: budgetMeal,
        text: "Budget Meal",
    },
    {
        link: "healthyfood",
        image: healthyFood,
        text: "Healthy Food",
    },
    {
        link: "mostloved",
        image: mostLoved,
        text: "Most Loved",
    },
    {
        link: "tfhours",
        image: tfHours,
        text: "24 Hours",
    },
];

const Inspo = () => {
    return (
        <div className="flex justify-center">
            <div className="mx-auto mt-16 max-w-7xl">
                <TitleHome text="Looking for inspo? Start here" />
                <div className="mt-7 flex max-w-6xl flex-wrap justify-center gap-5">
                    {inspoData.map((item, index) => (
                        <div key={index}>
                            <InspoCard
                                link={item.link}
                                image={item.image}
                                text={item.text}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Inspo;
