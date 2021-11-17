import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import RepoCard from "../../componentes/repoCard/RepoCard";

import Header from "../../layout/Header";
import "./Repo.styles.css"

const Repo = ()=>{

    const { name } =useParams ()
    
    const [repoData, setRepoData]= useState([])

    useEffect(()=>{
        const requestApi = async () =>{
            const urlDir =`https://api.github.com/users/${name}/repos`
            const response = await fetch(urlDir)
            const result = await response.json()
            setRepoData(result)
        }
        requestApi()

    }, [name])

    return(
        <div className="home-repo">
            <Header/>

            <div className="conte">

            {
                 repoData?.map (data=>
                    <RepoCard 
                        repoName={data.name}
                        owner ={name}
                        repoPrivate = {data.private}
                    />

                )
            }

            </div>

            
        </div>
    )
}

export default Repo