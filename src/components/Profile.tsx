import React, {FC} from "react";
import "../styles/profile.css"
import { PropTypes } from "../interfaces";

const Profile: FC<PropTypes> = (userInfo: PropTypes)=> {
    return (
        <div className="profileContainer">
            <div>
                <div className="details">
                    <p>First name: {userInfo.firstName}</p>
                </div>

                <div className="details">
                    <p>last name: {userInfo.lastName}</p>
                </div>

                <div className="details">
                    <p>Email address: {userInfo.email}</p>
                </div>

                <div className="details">
                    <p>Phone number: {userInfo.tel}</p>
                </div>

                <div className="details">
                    <p>Age: {userInfo.age}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile