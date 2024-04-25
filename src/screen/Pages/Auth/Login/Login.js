import React, { useState } from "react";
import "./Login.css"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const fn_submit = () => {
        if (document.getElementById("username").value === "") {
            return toast.error("Enter Username")
        } else if (document.getElementById("password").value === "") {
            return toast.error("Enter Password")
        } else {
            const currentDate = new Date();
            const monthAbbreviation = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ];
            if (document.getElementById("username").value === "admin" && document.getElementById("password").value === "admin123") {
                toast.success("Login Successfully")
                navigate("/dashboard")
                if (!localStorage.getItem("dateSet")) {
                    localStorage.setItem("dateSet", currentDate?.getDate() + "-" + monthAbbreviation[currentDate?.getMonth()] + "-" + currentDate?.getFullYear())
                }
            } else {
                return toast.error("Invalid Credentials")
            }
        }
    }
    return (
        <div className="loginMain">
            <div className="loginSecondary pb-4">
                <h3 className="text-center">Login</h3>
                <div className="d-flex flex-column px-3 mb-3 mt-5">
                    <label className="productCreateTxt">Username*</label>
                    <input type="text" className="productCreateInput" placeholder="Enter Username" id="username" required />
                </div>
                <div className="d-flex flex-column px-3 mb-3">
                    <label className="productCreateTxt">Password*</label>
                    <input type="password" className="productCreateInput" placeholder="Enter Password" id="password" required />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-info btn-md ms-3" style={{ width: "120px" }} onClick={fn_submit}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login