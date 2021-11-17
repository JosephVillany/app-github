import React, {useState}from 'react'

import Header from '../../layout/Header'
import Card from './card/Card'
import Form from '../form/Form'
import fondo from "../../assets/icons/fondo.jpeg"

const Home = () => {
    const [searchValue, setSearchValue] = useState("")
    const [dataApi, setDataApi] = useState([])

    const handleValue = ( {value} )=>{
        setSearchValue(value)
    }

    const handleSubmit = async(e)=>{
        e.preventDefault(); //Evitar que se refresque el navegador
        const response  = await fetch (`https://api.github.com/users/${searchValue}`);
        const result = await response.json();
        setDataApi(result)
        
    }

    return (
        <div>
            <Header />
            
            <div>
                

                <Form 
                handleSubmit={handleSubmit}
                handleValue={handleValue}
            
            />

            {     searchValue === ""  ? <h4 className="text-center">ingrese usuario a buscar!</h4> :
                  searchValue !== dataApi.login ?  <h4 className="text-center">no hay usuario</h4> :
                      
                    <Card 
                        key={dataApi?.id}
                        userName={dataApi?.login}
                        image={dataApi?.avatar_url}
                        followers={dataApi?.followers_url}
                        followin={dataApi?.followin_url}
                        repositories={dataApi?.repos_url}
                     
                     />

                
            }

                

            </div>

            <img className="  w-full" src={fondo} alt="" />

        </div>
    )
}

export default Home