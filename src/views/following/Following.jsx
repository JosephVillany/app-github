import React, {useState, useEffect} from "react";
import { useParams } from "react-router";


import "./Following.styles.css"
import FollowerCard from "../../componentes/followersCard/FollowersCard";
import Header from "../../layout/Header";

const Following =() =>{

    const {name } =useParams ()
    const [followingData, setFollowingData]= useState([])

    useEffect(()=>{
        const requestApi = async () =>{
            const urlDir =`https://api.github.com/users/${name}/following`
            const response = await fetch(urlDir)
            const result = await response.json()
            setFollowingData(result)
        }
        requestApi()

    }, [name])



    

    return(
        <div className="home-followin">
            <Header/>
            <div className="follo">
            {
                followingData?.map(data=>
                    <FollowerCard
                        key={data.id}
                        userName={data?.login}
                        image={data?.avatar_url}
                    />
                )
            }
            </div>
 

        </div>
    )
}

export default Following