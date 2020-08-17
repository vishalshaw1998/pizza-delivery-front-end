import React from "react";
import Card from "./Card";

function PizzaMenu() {
    return (
        <>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-6 col-sm-12 mt-sm-3">
                    <Card
                        props={{
                            src: "home",
                            title: "Homemade Pizza",
                            price: 100,
                            key: 0,
                        }}
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-sm-3">
                    <Card
                        props={{
                            src: "barb",
                            title: "Barbeque Pizza",
                            price: 200,
                            key: 1,
                        }}
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-sm-3">
                    <Card
                        props={{
                            src: "Cauliflower",
                            title: "Cauliflower Pizza",
                            key: 2,
                            price: 300,
                        }}
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-6 col-sm-12 mt-sm-3 ">
                    <Card
                        props={{
                            src: "burst",
                            title: "Burst Pizza",
                            price: 400,
                            key: 3,
                        }}
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-sm-3">
                    <Card
                        props={{
                            src: "NY",
                            title: "New York Pizza",
                            price: 500,
                            key: 4,
                        }}
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-sm-3">
                    <Card
                        props={{
                            src: "onion",
                            title: "Onion Pizza",
                            price: 600,
                            key: 5,
                        }}
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-6 col-sm-12 mt-sm-3">
                    <Card
                        props={{
                            src: "pepperoni",
                            title: "Pepperoni Pizza",
                            price: 700,
                            key: 6,
                        }}
                    />
                </div>
                <div className="col-lg-4 col-md-6  col-sm-12 mt-sm-3">
                    <Card
                        props={{
                            src: "pizza1",
                            title: "Margherita Pizza",
                            price: 800,
                            key: 7,
                        }}
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-sm-3">
                    <Card
                        props={{
                            src: "pizza2",
                            title: "Corn Pizza",
                            price: 900,
                            key: 8,
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default PizzaMenu;
