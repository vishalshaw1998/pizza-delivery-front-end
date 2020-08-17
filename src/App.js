import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import LoginPage from "./LoginPage/LoginPage";
import { Route } from "react-router-dom";
import UserLogin from "./UserLogin/UserLogin";
import AdminLogin from "./AdminLogin/AdminLogin";
import RegisterPage from "./RegisterPage/RegisterPage";
import UserDashboard from "./UserDashboard/UserDashboard";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

function App() {
    return (
        <>
            <Route path="/" exact>
                <LoginPage />
            </Route>
            <Route path="/userLogin" exact>
                <UserLogin />
            </Route>
            <Route path="/adminLogin" exact>
                <AdminLogin />
            </Route>
            <Route path="/register" exact>
                <RegisterPage />
            </Route>
            <Route path="/userDashboard" exact>
                <UserDashboard />
            </Route>
            <Route path="/adminDashboard" exact>
                <AdminDashboard />
            </Route>
        </>
    );
}

export default App;
