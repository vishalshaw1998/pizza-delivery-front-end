import React, { useState } from "react";
import UserHome from "./UserHome";

export const PizzaCountContext = React.createContext();
export const ChangeViewContext = React.createContext();
function UserDashboard() {
    const [pizza, setpizza] = useState([
        { name: "Homemade", count: 0, price: 100 },
        { name: "Barbeque", count: 0, price: 200 },
        { name: "Cauliflower", count: 0, price: 300 },
        { name: "Burst", count: 0, price: 400 },
        { name: "New York", count: 0, price: 500 },
        { name: "Onion", count: 0, price: 600 },
        { name: "Pepperoni", count: 0, price: 700 },
        { name: "Margherita", count: 0, price: 800 },
        { name: "Corn", count: 0, price: 900 },
    ]);
    const [view, setview] = useState("home");
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav mr-auto text-lg-center">
                        <li className="nav-item col mt-sm-3 mt-lg-0">
                            <span
                                className="color-white"
                                onClick={() => {
                                    setview("home");
                                }}
                            >
                                Home
                            </span>
                        </li>
                        <li className="nav-item col">
                            <span
                                className="color-white"
                                onClick={() => {
                                    setview("createPizza");
                                }}
                            >
                                Create Your Pizza
                            </span>
                        </li>
                        <li className="nav-item col">
                            <span
                                className="color-white"
                                onClick={() => {
                                    setview("cart");
                                }}
                            >
                                Cart
                            </span>
                        </li>
                        <li className="nav-item col">
                            <span
                                className="color-white"
                                onClick={() => {
                                    setview("cart");
                                }}
                            >
                                Logout
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
            <PizzaCountContext.Provider value={{ pizza, setpizza }}>
                <ChangeViewContext.Provider value={{ view, setview }}>
                    <div className="container">
                        {view === "home" && <UserHome />}
                        {view === "createPizza" && (
                            <span>This is Create Pizza</span>
                        )}
                        {view === "cart" && <span>This is Cart</span>}
                    </div>
                </ChangeViewContext.Provider>
            </PizzaCountContext.Provider>
        </>
    );
}

export default UserDashboard;
