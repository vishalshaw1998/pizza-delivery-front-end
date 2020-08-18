import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function AdminDashboard() {
    const history = useHistory();
    const [isAuthenticated, setisAuthenticated] = useState(false);
    useEffect(() => {
        if (!localStorage.getItem("admintoken")) {
            history.push("/");
        } else {
            axios({
                method: "get",
                url: "http://localhost:3001/userInfo",
                headers: {
                    authorization: localStorage.getItem("admintoken"),
                },
            }).then((res) => {
                if (res.data.status === "Invalid Token") {
                    alert("Please Login Again");
                    localStorage.removeItem("admintoken");
                    history.push("/");
                }
                if (res.data.status === "Success") {
                    setisAuthenticated(true);
                }
            });
        }
    }, [history, isAuthenticated]);
    return <div>This is Admin Dashboard</div>;
}

export default AdminDashboard;
