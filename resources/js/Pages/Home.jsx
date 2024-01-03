import Categories from "@/Layouts/Home/Categories";
import Hero from "@/Layouts/Home/Hero";
import Navbar from "@/Layouts/Home/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";

const Home = ({ auth }) => {
    return (
        <div className="mb-52">
            <Head title="Home" />
            <Navbar auth={auth} />
            <Hero />
            <Categories />
        </div>
    );
};

export default Home;
