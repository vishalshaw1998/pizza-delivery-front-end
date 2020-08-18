import React, { useEffect, useState } from "react";
import axios from "axios";

function Status() {
    const [pizza, setpizza] = useState([]);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true);
        axios({
            method: "GET",
            url: "http://localhost:3001/pizzaInfo",
            headers: {
                authorization: localStorage.getItem("token"),
            },
        }).then((res) => {
            if (res.data.status === "Success") {
                setloading(false);
                setpizza(res.data.data);
            }
        });
    }, []);
    return (
        <div>
            {!loading &&
                pizza.map((item, index) => {
                    return (
                        <div className="row mt-3" key={item._id}>
                            <div className="col-3"></div>
                            <div className="col-6">
                                <div className="text-center font-weight-bolder">
                                    Order Number: {index + 1}
                                </div>
                                {item.pizza.readyPizza.length ? (
                                    <div>
                                        Ready Made Pizza
                                        {item.pizza.readyPizza.map(
                                            (item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <li className="list-group-item">
                                                            {item.name}
                                                        </li>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                ) : (
                                    ""
                                )}
                                Custom Pizza
                                <div className="list-group-item">
                                    {item.pizza.customPizza[0].crust}
                                </div>
                            </div>
                            <div className="col-3 align-self-center">
                                {item.pizza.status}
                            </div>
                        </div>
                    );
                })}
            {loading && (
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
        </div>
    );
}

export default Status;
