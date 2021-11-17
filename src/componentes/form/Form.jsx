import React from 'react'

import "../form/Form.styles.css"

const Form = ({handleValue, handleSubmit}) => {
    return (
        <form onSubmit={(e)=> handleSubmit(e)} className="flex justify-center text-text pt-10 " >
            <input className="border-t border-b border-l rounded-l-lg    shadow-xl  focus:ring-2 focus:ring-blue-600"
            onChange={( { target } )=>handleValue(target)}
            required="required"
            type="text" placeholder="Search.." name="search" />
            <button className="border-r border-t border-b rounded-r-lg shadow-lg  focus:ring-2 focus:ring-blue-600" type="submit"><i class="fa fa-search"></i></button>
        </form>
    )
}

export default Form
