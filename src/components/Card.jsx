import { React, useState } from 'react'
import './Card.css'


const Card = ({ title, func }) => {
    return (
        <div>
            <input type="checkbox" name="title" checked={title} />
        </div>
    )
}

export default Card