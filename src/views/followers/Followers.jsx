import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'


import "./Followers.styles.css"
import Header from "../../layout/Header";
import FollowersCard from "../../componentes/followersCard/FollowersCard"




const Followers = () => {
    const {name}=useParams()
    const [followersInfo, setFollowersInfo]=useState([])

    useEffect(()=>{
        
        const requestApi=async()=>{
            const urlDir = `https://api.github.com/users/${name}/followers`
            const response = await fetch (urlDir)
            const result = await response.json()
            setFollowersInfo(result)
        }
        requestApi()
    }, [name])

    return (
        <div >
            <Header/>

            <div className=" home-followers   ">

                <div className="followers  grid grid-cols-1  md:grid-cols-2  gap-6 ">

                {
                        followersInfo?.map(info=>
                       <FollowersCard
                            key={info?.id}
                            userName={info?.login}
                            image={info?.avatar_url}                
                        />
                )
                }

                </div>

            </div>
       
            
        </div>
    )
}

export default Followers