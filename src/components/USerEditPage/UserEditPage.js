import React from "react";
import User from "../User/User";
import {getUser} from "../../pages/MiniCrudApp/MiniCrudApp";
import Api from "../API/API";

export default class UserEditPage extends React.Component {
    state = Object.assign({}, Api.getUser(this.props.id))



    render() {

        return (
            <div>

                <div className='Show-users' key={this.state.id}>
                    <User user={this.state}/>
                </div>
            </div>
        )
    }
}