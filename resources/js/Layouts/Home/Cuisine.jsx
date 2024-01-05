import Button from "@/Components/Button";
import React from "react";
import bakery from "../../../../public/images/bakery.jpg";
import baksosoto from "../../../../public/images/baksosoto.jpg";
import beverages from "../../../../public/images/beverages.jpg";
import coffee from "../../../../public/images/coffee.jpg";
import fastfood from "../../../../public/images/fastfood.jpg";
import korean from "../../../../public/images/korean.jpg";
import martabak from "../../../../public/images/martabak.jpg";
import noodles from "../../../../public/images/noodles.jpg";
import pizzapasta from "../../../../public/images/pizzapasta.jpg";
import seafood from "../../../../public/images/seafood.jpg";
import snacks from "../../../../public/images/snacks.jpg";
import western from "../../../../public/images/western.jpg";

const Cuisine = () => {
    return (
        <div className="flex justify-center">
            <div className="mx-auto mt-16 max-w-7xl">
                <h3 className="mb-7 flex justify-center text-2xl font-semibold text-gray-800">
                    Choose from cuisines
                </h3>
                <div className="flex max-w-[67rem] flex-wrap gap-[1.4rem]">
                    <a href="/coffee">
                        <img
                            className="mx-auto mb-4 w-40 rounded-full"
                            src={coffee}
                            alt=""
                        />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Coffee
                        </p>
                    </a>
                    <a href="/martabak">
                        <img
                            className="mx-auto mb-4 w-40 rounded-full"
                            src={martabak}
                            alt=""
                        />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Martabak
                        </p>
                    </a>
                    <a href="/baksosoto">
                        <img
                            className="mx-auto mb-4 w-40 rounded-full"
                            src={baksosoto}
                            alt=""
                        />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Bakso & soto
                        </p>
                    </a>
                    <a href="/snacks">
                        <img
                            className="mx-auto mb-4 w-40 rounded-full"
                            src={snacks}
                            alt=""
                        />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Snacks
                        </p>
                    </a>
                    <a href="/bakery">
                        <img
                            className="mx-auto mb-4 w-40 rounded-full"
                            src={bakery}
                            alt=""
                        />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Bakery
                        </p>
                    </a>
                    <a href="/beverages">
                        <img
                            className="mx-auto mb-4 w-40 rounded-full"
                            src={beverages}
                            alt=""
                        />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Beverages
                        </p>
                    </a>
                    <a href="/noodles">
                        <img
                            className="mx-auto mb-4 w-40 rounded-full"
                            src={noodles}
                            alt=""
                        />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Noodles
                        </p>
                    </a>
                    <a href="/seafood">
                        <img
                            className="mx-auto mb-4 w-40 rounded-full"
                            src={seafood}
                            alt=""
                        />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Seafood
                        </p>
                    </a>
                    <a href="/fastfood">
                        <img
                            className="mx-auto mb-4 w-40 rounded-full"
                            src={fastfood}
                            alt=""
                        />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Fast food
                        </p>
                    </a>
                    <a href="/korean">
                        <img
                            className="mx-auto mb-4 w-40 rounded-full"
                            src={korean}
                            alt=""
                        />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Korean
                        </p>
                    </a>
                    <a href="/western">
                        <img
                            className="mx-auto mb-4 w-40 rounded-full"
                            src={western}
                            alt=""
                        />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Western
                        </p>
                    </a>
                    <a href="/pizzapasta">
                        <img
                            className="mx-auto mb-4 w-40 rounded-full"
                            src={pizzapasta}
                            alt=""
                        />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Pizza & pasta
                        </p>
                    </a>
                </div>
                <div className="mt-7 flex justify-center">
                    <Button text="Show more cuisines" />
                </div>
            </div>
        </div>
    );
};

export default Cuisine;