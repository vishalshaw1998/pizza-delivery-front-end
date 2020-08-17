import React from "react";

function Card(props) {
    function handleClick(key) {
        console.log(key);
    }
    return (
        <div>
            {console.log(props)}
            <div
                class="card"
                style={{ width: "18rem" }}
                onClick={() => handleClick(props.props.key)}
            >
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
                    <div className="font-weight-bold">
                        Please Select The Number Of Pizza
                    </div>
                    <div className="text-center">
                        <button className="mr-3 btn-dark">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                        <span>0</span>
                        <button className="ml-3 btn-dark">
                            <i class="fa fa-minus " aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
