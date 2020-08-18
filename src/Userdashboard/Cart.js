import React, { useContext, useEffect, useState } from "react";
import {
    PizzaCountContext,
    CustomPizzaContext,
    ChangeViewContext,
} from "./UserDashboard";
import axios from "axios";

function Cart() {
    const { pizza, setpizza } = useContext(PizzaCountContext);
    const {
        customPizza,
        setcustomPizza,
        initialStateofCustomPizza,
    } = useContext(CustomPizzaContext);
    const { setview } = useContext(ChangeViewContext);
    const [pizzaOrdered, setpizzaOrdered] = useState([]);
    let total = pizzaOrdered.reduce((acc, item) => {
        return acc + item.count * item.price;
    }, 0);
    total += customPizza.price;
    const [isAdded, setisAdded] = useState(false);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setpizzaOrdered(
            pizza.filter((item) => {
                return item.count !== 0;
            })
        );
    }, [pizza]);
    async function handlePlaceOrder() {
        console.log("Hello");
        setloading(true);
        let res = await axios({
            method: "post",
            url: "http://localhost:3001/placeOrder",
            data: {
                pizzas: pizzaOrdered,
                customPizza: customPizza,
            },
            headers: {
                authorization: localStorage.getItem("token"),
            },
        });
        if (res.data.status === "Added") {
            setisAdded(true);
            setloading(false);
            setpizza([
                {
                    name: "Homemade",
                    count: 0,
                    price: 100,
                    src: `./assets/home.jpg`,
                },
                {
                    name: "Barbeque",
                    count: 0,
                    price: 200,
                    src: `./assets/barb.jpg`,
                },
                {
                    name: "Cauliflower",
                    count: 0,
                    price: 300,
                    src: `./assets/Cauliflower.jpg`,
                },
                {
                    name: "Burst",
                    count: 0,
                    price: 400,
                    src: `./assets/burst.jpg`,
                },
                {
                    name: "New York",
                    count: 0,
                    price: 500,
                    src: `./assets/NY.jpg`,
                },
                {
                    name: "Onion",
                    count: 0,
                    price: 600,
                    src: `./assets/onion.jpg`,
                },
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
                {
                    name: "Corn",
                    count: 0,
                    price: 900,
                    src: `./assets/pizza2.jpg`,
                },
            ]);
            setcustomPizza(initialStateofCustomPizza);
        } else {
            alert("Something Went Wrong");
        }
    }
    return (
        <>
            {!isAdded && (
                <>
                    <div className="text-center">
                        <h1>Check Out Page</h1>
                    </div>
                    <div className="row mt-5">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <table
                                style={{
                                    borderCollapse: "seperate",
                                    borderSpacing: "0 15px",
                                }}
                            >
                                <thead style={{ textAlign: "center" }}>
                                    <tr>
                                        <th>Item</th>
                                        <th>Image</th>
                                        <th>Count</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pizzaOrdered.map((item, index) => {
                                        return (
                                            <tr>
                                                <td>{item.name}</td>
                                                <td>
                                                    <img
                                                        src={require(`${item.src}`)}
                                                        alt=""
                                                        height="100"
                                                        width="100"
                                                    />
                                                </td>
                                                <td>{item.count}</td>
                                                <td>
                                                    {parseInt(item.price) *
                                                        parseInt(item.count)}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            {customPizza.price !== 0 && (
                                <div className="mt-5 text-center">
                                    Custom Pizza Cost : - {customPizza.price}
                                    {customPizza.price !== 0 && (
                                        <span
                                            className="text-center"
                                            style={{
                                                float: "right",
                                                position: "relative",
                                                bottom: "8px",
                                            }}
                                        >
                                            <button
                                                className="btn btn-dark"
                                                onClick={() =>
                                                    setcustomPizza(
                                                        initialStateofCustomPizza
                                                    )
                                                }
                                            >
                                                <i
                                                    class="fa fa-trash"
                                                    aria-hidden="true"
                                                ></i>
                                            </button>
                                        </span>
                                    )}
                                </div>
                            )}

                            <div className="font-weight-bolder text-center mt-4 mb-5">
                                Total Price Of Pizza: - {total}
                            </div>
                            {total !== 0 && (
                                <button
                                    disabled={loading}
                                    className="btn btn-primary btn-block"
                                    onClick={() => {
                                        handlePlaceOrder();
                                    }}
                                >
                                    {!loading ? (
                                        <div>Click To Place Order</div>
                                    ) : (
                                        <div>Please Wait...</div>
                                    )}
                                </button>
                            )}
                        </div>
                        <div className="col-3"></div>
                    </div>
                </>
            )}
            {isAdded && (
                <div className="row mt-5">
                    <div className="col-2"></div>
                    <div className="col-6">
                        <img
                            className="w-100"
                            src={require(`./assets/cat.jpg`)}
                            alt=""
                            height="250"
                        />
                        <div className="mt-4 text-center font-weight-bolder">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => {
                                    setview("status");
                                }}
                            >
                                Click To Move to Status
                            </button>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            )}
        </>
    );
}

export default Cart;
