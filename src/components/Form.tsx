import React, { FormEvent } from "react";
import { useState, FC } from 'react';
import Profile from "./Profile";
import '../styles/form.css'
import { OnchangeInterface } from "../interfaces";

const Form: FC<{}> = (props) =>  {
    const [submitted, setSubmitted] = useState(false)

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        tel: "",
        age: ""
    });

    const {firstName, lastName, email, tel, age} = user;

    const onChange = (e:OnchangeInterface) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const onSubmit = (e:FormEvent)  => {
        e.preventDefault();
        setSubmitted(true)
    }

    return (
        submitted ? <Profile {...user} /> :
        <div className="formContainer">
            <form onSubmit={onSubmit}>
                <h1>Register</h1>

                <input type="text" name="firstName" id="firstName" placeholder="First name here" value={firstName} onChange={onChange}/><br />
                <input type="text" name="lastName" id="lastName" placeholder="Last name here" value={lastName} onChange={onChange} /><br />
                <input type="email" name="email" id="email" placeholder="Email here" value={email} onChange={onChange}/><br />
                <input type="tel" name="tel" id="tel" placeholder="Mobile number here" value={tel} onChange={onChange}/><br />
                <input type="number" name="age" id="age" placeholder="Age here" value={age} onChange={onChange}/><br />

                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default Form