import React from 'react'
import { useState} from 'react'
import './Card.css'




const Card = ({ title, func }) => {
    return (
        <div>
            <h1>{title}</h1>
            <section>
                {func()}
            </section>  
        </div>
    )
}

export default Card