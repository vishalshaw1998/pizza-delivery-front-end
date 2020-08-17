import React, { useContext } from "react";
import { ChangeViewContext } from "./UserDashboard";

function ConfirmButton() {
    const { setview } = useContext(ChangeViewContext);
    function changeToCart() {
        setview("cart");
    }
    function changeToCreatePizza() {
        setview("createPizza");
    }
    return (
        <div className="row mb-5 mt-3">
            <div className="col-2"></div>
            <div className="col-7">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <button
                            className="btn btn-primary btn-block mt-3"
                            onClick={changeToCart}
                        >
                            Ready For CheckOut?
                        </button>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <button
                            className="btn btn-primary btn-block mt-3"
                            onClick={changeToCreatePizza}
                        >
                            Want to Make Your Own Pizza?
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-3"></div>
        </div>
    );
}

export default ConfirmButton;
