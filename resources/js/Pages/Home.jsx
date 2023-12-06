import { PromoCard } from "@/Components/PromoCard";
import RestaurantCards from "@/Components/RestaurantCards";
import { Search } from "@/Components/Search";
import { Button } from "@/Components/ui/button";
import { Head } from "@inertiajs/react";
import React from "react";

const Home = ({ auth }) => {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <div className="flex justify-center pb-5">
                <div className="max-w-xs">
                    <div className="mt-3">
                        <div className="mb-5 flex justify-between">
                            <p className="font-extrabold">GoFud</p>
                            <p>Hello, {auth?.user?.name || "Guest"}</p>
                        </div>
                        <div className="mb-5">
                            <Search />
                        </div>
                        <div className="mb-5 flex justify-between">
                            <p className="flex items-end">
                                Choose from cuisines
                            </p>
                            <Button>See all</Button>
                        </div>
                        <div className="mb-5 pb-2 flex gap-5 overflow-x-auto custom-scrollbar">
                            <div>
                                <img
                                    className="rounded-full"
                                    src="https://picsum.photos/50"
                                    alt=""
                                />
                                <p>Lorem</p>
                            </div>
                            <div>
                                <img
                                    className="rounded-full"
                                    src="https://picsum.photos/50"
                                    alt=""
                                />
                                <p>Lorem</p>
                            </div>
                            <div>
                                <img
                                    className="rounded-full"
                                    src="https://picsum.photos/50"
                                    alt=""
                                />
                                <p>Lorem</p>
                            </div>
                            <div>
                                <img
                                    className="rounded-full"
                                    src="https://picsum.photos/50"
                                    alt=""
                                />
                                <p>Lorem</p>
                            </div>
                            <div>
                                <img
                                    className="rounded-full"
                                    src="https://picsum.photos/50"
                                    alt=""
                                />
                                <p>Lorem</p>
                            </div>
                            <div>
                                <img
                                    className="rounded-full"
                                    src="https://picsum.photos/50"
                                    alt=""
                                />
                                <p>Lorem</p>
                            </div>
                            <div>
                                <img
                                    className="rounded-full"
                                    src="https://picsum.photos/50"
                                    alt=""
                                />
                                <p>Lorem</p>
                            </div>
                            <div>
                                <img
                                    className="rounded-full"
                                    src="https://picsum.photos/50"
                                    alt=""
                                />
                                <p>Lorem</p>
                            </div>
                        </div>
                        <div className="mb-5 flex justify-between">
                            <div>
                                <p>What's good around the block</p>
                                <p>Try your area's finest eats.</p>
                            </div>
                            <Button>See all</Button>
                        </div>
                        <div className="mb-5 flex overflow-x-auto gap-4 pb-2 custom-scrollbar">
                            <RestaurantCards />
                        </div>
                        <div className="flex overflow-x-auto gap-4 pb-2 custom-scrollbar">
                            <PromoCard />
                            <PromoCard />
                            <PromoCard />
                            <PromoCard />
                            <PromoCard />
                            <PromoCard />
                            <PromoCard />
                            <PromoCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
