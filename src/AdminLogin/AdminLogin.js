import React, { useRef, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AdminLogin() {
    const username = useRef();
    const password = useRef();
    const history = useHistory();
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await axios({
            method: "post",
            url: "http://localhost:3001/loginAdmin",
            data: {
                username: username.current.value,
                password: password.current.value,
            },
        });
        if (res.data.status === "Not Found") {
            alert("Wrong Credentials");
            return;
        }
        if (res.data.status === "Success") {
            if (res.data.role === "admin") {
                localStorage.setItem("admintoken", res.data.token);
                history.push("/adminDashboard");
            } else {
                alert("Please Login Through User");
            }
        }
    }
    useEffect(() => {
        if (localStorage.getItem("admintoken")) {
            history.push("/adminDashboard");
        }
    }, [history]);
    return (
        <div className="container">
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 text-center pad">
                        Admin Login Page
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
                            <button className="btn btn-primary" type="submit">
                                Login
                            </button>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </form>
        </div>
    );
}

export default AdminLogin;
