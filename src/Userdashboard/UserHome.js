import React from "react";
import Carousel from "./Carousel";
import PizzaMenu from "./PizzaMenu";
import ConfirmButton from "./ConfirmButton";

function UserHome() {
    return (
        <div className="container">
            <Carousel />
            <PizzaMenu />
            <ConfirmButton />
        </div>
    );
}

export default UserHome;
