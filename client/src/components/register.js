import React, { useState } from "react";

function Register(){
    const[formData, setFormData] = useState({
        firstName:"",
        lastName: "",
        contact:"",
        email:"",
        password: "",
        confirmPassword:"",
        agreeToTerms:false,
    });
   const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    const newValue = type === "checkbox" ? checked : value
    setFormData ({...formData, [name]: newValue});
   } ;

   const handleSubmit = (e) => {
    e.preventDefault();
    //handle submit to the server
    console.log(formData);
   };
return (
<div>
    <h2>User Register</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="firstName">First Name</label>
            <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange ={handleChange}
            />
        </div>
        <div>
            <label htmlFor="lastName">Last Name</label>
            <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="contact">Contact</label>
            <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
        </div>
        <div>
            <label>Confirm Password</label>
            <input
                type="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
            />
        </div>
        <div>
            <label>
            <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            />
            <em>I agree to the Terms and Conditions.</em>
            </label>
        </div>
        <div>
            <button type="submit">Register</button>
        </div>
    </form>
</div>
)

}

export default Register