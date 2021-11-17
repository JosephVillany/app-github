import React from "react";
import { Link } from 'react-router-dom';

import "./Card.styles.css"

const Card = (props) => {

    const {userName, image} = props

    return (
        <div className="card-container">

            <img src={image} alt={`${userName}`} />
            <h2>nombre {userName}</h2>
            <ul>
                
                 <Link to={`/users/${userName}/followers`} > <li className="btn">Followers</li> </Link>

                 <Link to={`/users/${userName}/following`} > <li className="btn">Following</li> </Link>
                        
                 <Link to={`/users/${userName}/repos`} > <li className="btn">Repositories</li> </Link>
    
              
               
                
            </ul>

        </div>
    )
}

export default Card