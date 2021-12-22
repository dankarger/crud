import React from "react";
import {Link} from "react-router-dom";
import './Header.css'


class Header extends React.Component {

    render() {
        return(
            <div className='Header-nav'>
                Header
                <div className='Header-link'>
                    <Link to='/' > Navigate to Home page</Link>
                </div>
                <div className='Header-link'>
                    <Link to='/users' > Navigate to Users page</Link>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Header