import React, { useState, useEffect } from "react";
import UserHome from "./UserHome";
import CustomPizzaMenu from "./CustomPizzaMenu";
import Cart from "./Cart";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Status from "./Status";

export const PizzaCountContext = React.createContext();
export const ChangeViewContext = React.createContext();
export const CustomPizzaContext = React.createContext();
function UserDashboard() {
    const [pizza, setpizza] = useState([
        { name: "Homemade", count: 0, price: 100, src: `./assets/home.jpg` },
        { name: "Barbeque", count: 0, price: 200, src: `./assets/barb.jpg` },
        {
            name: "Cauliflower",
            count: 0,
            price: 300,
            src: `./assets/Cauliflower.jpg`,
        },
        { name: "Burst", count: 0, price: 400, src: `./assets/burst.jpg` },
        { name: "New York", count: 0, price: 500, src: `./assets/NY.jpg` },
        { name: "Onion", count: 0, price: 600, src: `./assets/onion.jpg` },
        {
            name: "Pepperoni",
            count: 0,
            price: 700,
            src: `./assets/pepperoni.jpg`,
        },
        {
            name: "Margherita",
            count: 0,
            price: 800,
            src: `./assets/pizza1.jpg`,
        },
        { name: "Corn", count: 0, price: 900, src: `./assets/pizza2.jpg` },
    ]);
    const initialStateofCustomPizza = {
        crust: "",
        sauce: "",
        cheese: "",
        veggies: [],
        meat: [],
        price: 0,
    };
    const [customPizza, setcustomPizza] = useState(initialStateofCustomPizza);
    const [view, setview] = useState("home");
    const [isAuthenticated, setisAuthenticated] = useState(false);
    const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            history.push("/");
        } else {
            axios({
                method: "get",
                url: "https://pizza-delivery-backend123.herokuapp.com/userInfo",
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            }).then((res) => {
                if (res.data.status === "Invalid Token") {
                    alert("Please Login Again");
                    localStorage.removeItem("token");
                    history.push("/");
                }
                if (res.data.status === "Success") {
                    setisAuthenticated(true);
                }
            });
        }
    }, [history, isAuthenticated]);
    return (
        <>
            {isAuthenticated && (
                <>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mr-auto text-lg-center">
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
                                            setview("status");
                                        }}
                                    >
                                        Order Status
                                    </span>
                                </li>
                                <li className="nav-item col">
                                    <span
                                        className="color-white"
                                        onClick={() => {
                                            localStorage.removeItem("token");
                                            history.push("/");
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
                            <CustomPizzaContext.Provider
                                value={{
                                    customPizza,
                                    setcustomPizza,
                                    initialStateofCustomPizza,
                                }}
                            >
                                <div className="container">
                                    {view === "home" && <UserHome />}
                                    {view === "createPizza" && (
                                        <CustomPizzaMenu />
                                    )}
                                    {view === "status" && <Status />}
                                    {view === "cart" && <Cart />}
                                </div>
                            </CustomPizzaContext.Provider>
                        </ChangeViewContext.Provider>
                    </PizzaCountContext.Provider>
                </>
            )}
            {!isAuthenticated && (
                <div className="padding-top text-center">
                    <img
                        className="img-fluid"
                        src={require(`./assets/loading.jpg`)}
                        alt=""
                        height="200px"
                        width="200px"
                    />
                </div>
            )}
        </>
    );
}

export default UserDashboard;
