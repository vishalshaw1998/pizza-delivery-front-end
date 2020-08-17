import React, { useContext } from "react";
import { PizzaCountContext } from "./UserDashboard";

function Card(props) {
    const { pizza, setpizza } = useContext(PizzaCountContext);
    function addItem(key) {
        let tempPizza = [...pizza];
        tempPizza[key].count += 1;
        setpizza(tempPizza);
    }
    function deleteItem(key) {
        let tempPizza = [...pizza];
        tempPizza[key].count -= 1;
        setpizza(tempPizza);
    }
    return (
        <div>
            <div class="card" style={{ width: "18rem" }}>
                <img
                    class="card-img-top"
                    src={require(`./assets/${props.props.src}.jpg`)}
                    alt="Card cap"
                    height="200px"
                    width="200px"
                />
                <div class="card-body">
                    <h5 class="card-title">{props.props.title}</h5>
                    <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <p className="font-weight-bold">
                        Price : {`${props.props.price} INR`}
                    </p>
                    <div className="font-weight-bold">
                        Please Select The Number Of Pizza
                    </div>
                    <div className="text-center">
                        <button
                            className="mr-3 btn-dark"
                            disabled={
                                pizza[props.props.key].count === 0
                                    ? true
                                    : false
                            }
                            onClick={() => {
                                deleteItem(props.props.key);
                            }}
                        >
                            <i class="fa fa-minus " aria-hidden="true"></i>
                        </button>
                        <span>{pizza[props.props.key].count}</span>
                        <button
                            className="ml-3 btn-dark"
                            onClick={() => {
                                addItem(props.props.key);
                            }}
                        >
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
