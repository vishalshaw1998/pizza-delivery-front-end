import React, { useRef, useState, useContext } from "react";
import { CustomPizzaContext, ChangeViewContext } from "./UserDashboard";

function CustomPizzaMenu() {
    const { setcustomPizza } = useContext(CustomPizzaContext);
    const { setview } = useContext(ChangeViewContext);
    const veggies = [
        "Black olives ",
        "Bell pepper",
        "Cherry tomatoes",
        "Red onion",
        "Mushrooms",
        "Fresh basil",
    ];
    const meats = ["Pepperoni", "Sausage", "Bacon", "Prosciutto", "Meatballs"];
    let meatOrdered = [];
    let veggiesOrdered = [];
    const dropDown = useRef();
    const sauce = useRef();
    const cheese = useRef();
    const [src, setsrc] = useState("thincrust");
    const [srcSauce, setSauce] = useState("pesto");
    const [srcCheese, setCheese] = useState("mozz");
    function changeSrc() {
        setsrc(dropDown.current.value);
    }
    function changeSauceSrc() {
        setSauce(sauce.current.value);
    }
    function changeCheeseSrc() {
        setCheese(cheese.current.value);
    }
    function handleCheckBox(target, item) {
        if (target.checked) {
            veggiesOrdered.push(item);
        } else {
            let index = veggiesOrdered.indexOf(item);
            veggiesOrdered.splice(index, 1);
        }
    }
    function handleCheckBoxMeat(target, item) {
        if (target.checked) {
            meatOrdered.push(item);
        } else {
            let index = meatOrdered.indexOf(item);
            meatOrdered.splice(index, 1);
        }
    }
    function handleSubmit() {
        let priceOfMeat = 0;
        let priceOfVeggies = 0;
        if (veggiesOrdered.length > 3) {
            priceOfVeggies = (veggiesOrdered.length - 3) * 25;
        }
        if (meatOrdered.length > 1) {
            priceOfMeat = (meatOrdered.length - 1) * 100;
        }
        setcustomPizza({
            crust: src,
            sauce: srcSauce,
            cheese: srcCheese,
            veggies: [...veggiesOrdered],
            meat: [...meatOrdered],
            price: 150 + 25 + 50 + priceOfMeat + priceOfVeggies,
        });
        setview("cart");
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="text-center">
                        <h1>WELCOME TO CREATE YOUR OWN PIZZA MENU</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <img
                        className="w-100"
                        src={require("./assets/coverImage.jpg")}
                        alt=""
                        height="250"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="form-group mt-4">
                        <label>Choose A Pizza Crust</label>
                        <select
                            ref={dropDown}
                            className="form-control"
                            onChange={changeSrc}
                        >
                            <option value="thincrust">Thin Crust</option>
                            <option value="flat">Flatbread Crust</option>
                            <option value="thick">Thick Crust </option>
                            <option value="auth">
                                Authentic Wood-Fired Crusts
                            </option>
                            <option value="garlic">Garlic parmesan</option>
                        </select>
                        <img
                            className="w-50 mt-3"
                            src={require(`./assets/${src}.jpg`)}
                            alt=""
                            height="150"
                            style={{ marginLeft: "25%" }}
                        />
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="form-group mt-4">
                        <label>Choose A Sauce</label>
                        <select
                            ref={sauce}
                            className="form-control"
                            onChange={changeSauceSrc}
                        >
                            <option value="pesto">Pesto</option>
                            <option value="bbq">BBQ Sauce</option>
                            <option value="hummus">Hummus </option>
                            <option value="tap">Tapenade</option>
                        </select>
                        <img
                            className="w-50 mt-3"
                            src={require(`./assets/${srcSauce}.jpg`)}
                            alt=""
                            height="150"
                            style={{ marginLeft: "25%" }}
                        />
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row mt-3">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="form-group mt-4">
                        <label>Choose A Cheese</label>
                        <select
                            ref={cheese}
                            className="form-control"
                            onChange={changeCheeseSrc}
                        >
                            <option value="mozz">MOZZARELLA</option>
                            <option value="gor">GORGONZOLA</option>
                            <option value="pro">PROVOLONE </option>
                            <option value="goat">GOAT CHEESE</option>
                        </select>
                        <img
                            className="w-50 mt-3"
                            src={require(`./assets/${srcCheese}.jpg`)}
                            alt=""
                            height="150"
                            style={{ marginLeft: "25%" }}
                        />
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row mt-3">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="form-group mt-4">
                        <label>Choose Veggies</label>
                        <div>Each Veggie above 3 units will cost 25 INR</div>
                        <div>
                            {veggies.map((item, index) => {
                                return (
                                    <span key={index} className="mr-3">
                                        <input
                                            className="mr-2"
                                            type="checkbox"
                                            name=""
                                            id=""
                                            value={item}
                                            onClick={(e) =>
                                                handleCheckBox(e.target, item)
                                            }
                                        />
                                        {item}{" "}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row mt-3">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="form-group mt-4">
                        <label>Choose Meat</label>
                        <div>Each Meat Above 1 Will Cost 100 INR Each</div>
                    </div>
                    <div>
                        {meats.map((item, index) => {
                            return (
                                <span key={index} className="mr-3">
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        name=""
                                        id=""
                                        value={item}
                                        onClick={(e) =>
                                            handleCheckBoxMeat(e.target, item)
                                        }
                                    />
                                    {item}{" "}
                                </span>
                            );
                        })}
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row mt-3">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="row mb-5">
                        <div className="col-lg-6 col-sm-12 mt-sm-3">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => setview("home")}
                            >
                                Want to buy Ready-Made Pizza?
                            </button>
                        </div>
                        <div className="col-lg-6 col-sm-12 mt-sm-3">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => handleSubmit()}
                            >
                                Want to Checkout?
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    );
}

export default CustomPizzaMenu;
