import React, {useState} from "react";

function Login (){
    const[loginData, setLoginData]= useState ({
        identifier:"",
        password:"",

    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginData ({...loginData, [name]: value});
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //Handle data to server
        console.log("Login Data", loginData)
    };
    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="identifier">Email or Contact</label>
                    <input
                    type="text"
                    id="identifier"
                    name="identifier"
                    value={loginData.identifier}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>
                <a href="#">Forgot Password</a>
            </p>
            <p>
                Don't have an account? <a href="#">Sign up</a>
            </p>
        </div>
    );
}

export default Login;