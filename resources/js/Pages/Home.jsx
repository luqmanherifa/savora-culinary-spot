import { CulinaryCard } from "@/Components/CulinaryCard";
import { PromoCard } from "@/Components/PromoCard";
import { Search } from "@/Components/Search";
import { Button } from "@/Components/ui/button";
import React from "react";

const Home = () => {
    return (
        <div className="flex justify-center pb-5">
            <div className="max-w-xs">
                <div className="mt-3">
                    <div className="mb-5 flex justify-between">
                        <p className="font-bold">GoFud</p>
                        <p>Hello, Hanni Pham</p>
                    </div>
                    <div className="mb-5">
                        <Search />
                    </div>
                    <div className="mb-5 flex justify-between">
                        <p>Choose from cuisines</p>
                        <Button>See all</Button>
                    </div>
                    <div className="mb-5 pb-2 flex gap-5 overflow-x-auto">
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
                    <div className="mb-5 flex overflow-x-auto gap-4 pb-2">
                        <CulinaryCard />
                        <CulinaryCard />
                        <CulinaryCard />
                        <CulinaryCard />
                        <CulinaryCard />
                        <CulinaryCard />
                        <CulinaryCard />
                        <CulinaryCard />
                    </div>
                    <div className="flex overflow-x-auto gap-4 pb-2">
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
    );
};

export default Home;
