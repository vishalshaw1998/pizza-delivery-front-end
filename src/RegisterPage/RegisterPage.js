import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
    const pwd = useRef();
    const cpwd = useRef();
    const eid = useRef();
    const [loading, setloading] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        if (pwd.current.value === cpwd.current.value) {
            setloading(true);
            const res = await axios({
                method: "post",
                url: "https://pizza-delivery-backend123.herokuapp.com/register",
                data: {
                    username: eid.current.value,
                    password: pwd.current.value,
                },
            });
            if (res.data.status === "Already Present") {
                alert("Username Already Present");
                setloading(false);
                return;
            }
            if (res.data.status === "Success") {
                setloading(false);
                setLoginStatus(true);
            }
        }
    }
    useEffect(() => {
        localStorage.removeItem("token");
    }, []);
    return (
        <>
            {!loginStatus && (
                <div className="container">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6 text-center padding-top">
                                <h1>Register Page</h1>
                                <div className="mt-3">
                                    <label htmlFor="">Email-Id</label>
                                    <input
                                        ref={eid}
                                        type="email"
                                        className="form-control mt-3"
                                        name=""
                                        required
                                    />
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="">Password</label>
                                    <input
                                        ref={pwd}
                                        type="password"
                                        className="form-control"
                                        name=""
                                        required
                                    />
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="">Confirm Password</label>
                                    <input
                                        ref={cpwd}
                                        type="password"
                                        className="form-control"
                                        name=""
                                        required
                                    />
                                </div>
                                <div className="mt-3">
                                    <button
                                        disabled={loading}
                                        className="btn btn-primary"
                                        type="submit"
                                    >
                                        {loading ? (
                                            <div>Please Wait...</div>
                                        ) : (
                                            <div>Register</div>
                                        )}
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
            )}
            {loginStatus && (
                <div className="text-center padding-top">
                    <div className="font-weight-bold display-1 mb-5">
                        Successful Sign Up
                    </div>
                    <Link to="/">Click To Login</Link>
                </div>
            )}
        </>
    );
}

export default RegisterPage;
