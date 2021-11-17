import React from "react";
import { Link } from "react-router-dom";

import "./FollowersCard.styles.css"

const FollowerCard = ({userName, image})=>{
    return(
        <div className="card-followers">
            <img src={image} alt={`ìmage of${userName}`} />
            <h4>{userName}</h4>
            <Link to={`/users/${userName}`}><button className="btn-followers">Ver mas! </button></Link>
        </div>
    )
}

export default FollowerCard