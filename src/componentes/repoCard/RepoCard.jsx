import React from "react";

import "./RepoCard.styles.css"

const RepoCard = ({repoName, owner, repoPrivate})=>
{
    const repoLink =`https://github.com/${owner}/${repoName}`

    return(
        <div className="repo-card">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
            <h4>Name : {owner}</h4>
            <h4>{repoName}</h4>
            <h4>{repoPrivate?"Private": "Public"} </h4>
            <a className="btn-repo" href={repoLink} target="_blank" rel="noreferrer" >see more about this repo</a>
        </div>
    )
}

export default RepoCard