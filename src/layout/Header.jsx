import {useNavigate} from 'react-router-dom';
import React, { useState } from 'react'
import "../layout/Header.styles.css"



const Header = ()=>{

    const [show, setShow] = useState(false)
    const navigate = useNavigate();

    const handlerMenu = ( ) =>{
        setShow(!show)
    }

    return(
    <>
        <div className= "header-container" >
            <h3>Proyect GiHub JosephVillany</h3>
            <button onClick={handlerMenu}><i className="fa fa-bars"></i></button>
        </div>

        <div className={show ? "menuNav" : "notVisible"}>
                <ul>
                    <li className="li" onClick={()=> navigate('/')}>
                        Home
                    </li>
                    <li className="li" onClick={()=> navigate(- 1)}>
                       Go Back
                    </li>
                    <li className="li" onClick={()=> navigate(+ 1)}>
                        Next
                    </li>
                </ul>
             </div>

    </>
    );

    
}

export default Header;