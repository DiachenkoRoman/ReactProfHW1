import React from "react";
import "../styles/errors.css"

export const FormErrors = ({formErrors}) =>{
    return(
    <div className="formErrors">
        {Object.keys(formErrors).map((elem, index)=>{
            if (formErrors[elem].length > 0){
                return(
                    <p key={index}>{elem} {formErrors[elem]}</p>
                )
            } else {
                return ""
            }
        })}
    </div>
    )
}
