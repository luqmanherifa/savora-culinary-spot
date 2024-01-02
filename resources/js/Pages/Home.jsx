import Hero from "@/Layouts/Hero";
import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";

const Home = ({ auth }) => {
    return (
        <>
            <Head title="Home" />
            <Navbar auth={auth} />
            <Hero />
        </>
    );
};

export default Home;
