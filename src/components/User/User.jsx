import React from "react";
import './User.css'
import Header from "../Header/Header";
import {Link} from "react-router-dom";

export default function User(props) {
    const {user} = props

    return (
        <>
                <div className='ui card User' id={user.id} key={user.id}>
                    <Link to={`/user/${user.id}`}>
                    <div>
                        <div className="image">
                            <img className='f' src={user.image} alt={user.image}/>
                        </div>
                        <div className="content">
                            <h3 className='header' >{user.name}</h3>
                        </div>
                             <p>{user.address}</p>

                            <button className="ui button">Edit</button>

                        {/*<img src={user.cat} alt={user.cat}/>*/}
                    </div>
                    </Link>
                </div>
        </>
    )
}