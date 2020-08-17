import React from "react";

function Carousel() {
    return (
        <div
            id="carouselExampleIndicators"
            className="carousel slide mt-3"
            data-ride="carousel"
        >
            <ol className="carousel-indicators">
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                ></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        className="d-block w-100"
                        src={require("./assets/1.png")}
                        alt="First slide"
                        width="250px"
                        height="250px"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        className="d-block w-100"
                        src={require("./assets/1.jpg")}
                        alt="Second slide"
                        width="250px"
                        height="250px"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        className="d-block w-100"
                        src={require("./assets/2.jpg")}
                        alt="Third slide"
                        width="250px"
                        height="250px"
                    />
                </div>
            </div>
            <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;
