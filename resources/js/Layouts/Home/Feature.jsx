import React from "react";
import featurePurple from "../../../../public/images/featurepurple.png";
import featureBlue from "../../../../public/images/featureblue.png";
import featureRed from "../../../../public/images/featurered.png";
import featureYellow from "../../../../public/images/featureyellow.png";
import TitleHome from "@/Components/TitleHome";
import FeatureCard from "@/Components/FeatureCard";

const featureData = [
    {
        image: featurePurple,
        text: "Countless reviews to go by",
        css1: "border-purple-200 bg-purple-200",
        css2: "text-purple-700",
    },
    {
        image: featureBlue,
        text: "Wide variety of cuisines",
        css1: "border-blue-200 bg-blue-200",
        css2: "text-blue-700",
    },
    {
        image: featureRed,
        text: "Best quality ingredients",
        css1: "border-red-200 bg-red-200",
        css2: "text-red-700",
    },
    {
        image: featureYellow,
        text: "Order in or pick up from the resto",
        css1: "border-yellow-200 bg-yellow-200",
        css2: "text-yellow-700",
    },
];

const Feature = () => {
    return (
        <div className="flex justify-center">
            <div className="mx-auto mt-16 max-w-7xl">
                <TitleHome text="Why order from Savora?" />
                <div className="mt-7 flex max-w-6xl flex-wrap justify-center gap-6">
                    {featureData.map((item, index) => (
                        <div key={index}>
                            <FeatureCard
                                image={item.image}
                                text={item.text}
                                css1={item.css1}
                                css2={item.css2}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feature;
