import React from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
    return (
        <div className="container">
            <form>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 text-center padding-top">
                        Register Page
                        <div className="mt-3">
                            <label htmlFor="">Email-Id</label>
                            <input
                                type="email"
                                className="form-control mt-3"
                                name=""
                                id=""
                                required
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name=""
                                id=""
                                required
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name=""
                                id=""
                                required
                            />
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-primary" type="submit">
                                Register
                            </button>
                        </div>
                        <div className="mt-2">
                            <Link to="/">Already have an account</Link>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;
