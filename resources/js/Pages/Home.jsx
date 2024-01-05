import Cuisine from "@/Layouts/Home/Cuisine";
import Hero from "@/Layouts/Home/Hero";
import Inspo from "@/Layouts/Home/Inspo";
import Navbar from "@/Layouts/Home/Navbar";
import Resto from "@/Layouts/Home/Resto";
import { Head } from "@inertiajs/react";
import React from "react";

const Home = ({ auth }) => {
    return (
        <div className="mb-52">
            <Head title="Home" />
            <Navbar auth={auth} />
            <Hero />
            <Inspo />
            <Cuisine />
            <Resto />
        </div>
    );
};

export default Home;
