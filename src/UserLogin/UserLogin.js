import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function UserLogin() {
    const [loading, setloading] = useState(false);
    const history = useHistory();
    const username = useRef();
    const password = useRef();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            history.push("/userDashboard");
        }
    }, [history]);
    async function handleSubmit(e) {
        e.preventDefault();
        setloading(true);
        const res = await axios({
            method: "post",
            url: "http://localhost:3001/login",
            data: {
                username: username.current.value,
                password: password.current.value,
            },
        });
        if (res.data.status === "Not Found") {
            alert("Wrong Credentials");
            setloading(false);
            return;
        }
        if (res.data.status === "Success") {
            if (res.data.role === "user") {
                localStorage.setItem("token", res.data.token);
                history.push("/userDashboard");
            } else {
                alert("Please Login Through Admin");
            }
        }
    }
    return (
        <div className="container">
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 text-center padding-top">
                        User Login Page
                        <div className="mt-3">
                            <label htmlFor="">Username</label>
                            <input
                                ref={username}
                                type="email"
                                className="form-control mt-3"
                                name=""
                                required
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">Password</label>
                            <input
                                ref={password}
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
                                    <div>Login</div>
                                )}
                            </button>
                        </div>
                        {!loading && (
                            <div className="mt-2">
                                <Link to="/register">
                                    Don't Have An Account
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="col-3"></div>
                </div>
            </form>
        </div>
    );
}

export default UserLogin;
