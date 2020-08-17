import React from "react";
import "./signin.css";
import { Link } from "react-router-dom";
function LoginPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 text-center pad">
                    Welcome To Pizza Delivery System
                    <div className="mt-3" title="Admin Login Page">
                        <Link to="/adminLogin">Admin Login</Link>
                    </div>
                    <div className="mt-3" title="User Login Page">
                        <Link to="/userLogin">User Login</Link>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export default LoginPage;
