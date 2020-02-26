import React from "react";
import Heroe from "./Heroe";
import Gallery from "./Gallery";
import MainContent from "./MainContent";

const Landing = () => {
    return (
        <div>
            <Heroe />
            <MainContent />
            <Gallery />
        </div>
    );
};

export default Landing;