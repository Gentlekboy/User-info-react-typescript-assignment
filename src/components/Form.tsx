import React from "react";

function Form() {
    return (
        <form>
            <h1>Register</h1>

            <input type="text" name="firstName" id="firstName" placeholder="Enter your first name here" /><br />
            <input type="text" name="lastName" id="lastName" placeholder="Enter your last name here" /><br />
            <input type="email" name="email" id="email" placeholder="Enter your email here"/><br />
            <input type="tel" name="tel" id="tel" placeholder="Enter your mobile number here"/><br />
            <input type="number" name="age" id="age" placeholder="Enter your age here"/><br />

            <button type="submit">Save</button>
        </form>
    )
}

export default Form