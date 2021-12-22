import React from "react";
import User from '../User/User';
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import './UsersList.css'
import Api from "../API/API";

class UsersList extends React.Component {
  // state = { userList:Api.getListUsers()}



    showUsers=()=> {
        return (

            <div>
                <Header />
                <div className="UsersList">
                {this.props.usersList.map(user=>{
                    return (
                        <div className='Show-users' key={user.id}>
                        <User user={user} />
                        </div>
                    )

                })}
                </div>
           </div>)
    }


   componentDidMount() {

   }

    render(){
        return(
            <div>
                {this.showUsers()}
            </div>
        )
    }

}

export default UsersList