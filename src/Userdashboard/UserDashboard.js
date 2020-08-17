import React, { useState } from "react";
import UserHome from "./UserHome";

function UserDashboard() {
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
            <div className="container">
                {view === "home" && <UserHome />}
                {view === "createPizza" && <span>This is Create Pizza</span>}
                {view === "cart" && <span>This is Cart</span>}
            </div>
        </>
    );
}

export default UserDashboard;
