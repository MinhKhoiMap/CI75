import React from 'react'
import './User.css'

const User = ({ data, id }) => {
    return (
        <div className="user" key={id}>
            <figure className="user__img-wrapper">
                <img src='https://meohz.com/img/11539578_397273127125271_8786822503663755867_n.jpg' className="user__img"></img>
            </figure>
            <div className="user__info">
                <h3 className="user__user-name">{data['username']}</h3>
                <p className="user__name">Username: {data['name']}</p>
                <p className="user__email">Email: {data['email']}</p>
                <p className="user__street">Address(Street): {data['address']['street']}</p>
            </div>
        </div>
    )
}

export default User