import React from "react";
import User from "../User/User";
import {getUser} from "../../pages/MiniCrudApp/MiniCrudApp";
import Api, {axoisApi} from "../API/API";
import {Link} from "react-router-dom";

export default class UserEditPage extends React.Component {
    // state = Object.assign({}, Api.getUser(this.props.id))
state = {user:null,inputName:''}

    findUser = async () =>{
        let user= await axoisApi.get(this.props.id)
        // console.log(user)
        console.log('user',user.data)
        //
        this.setState({user:user.data},()=>console.log('hghfgh',this.state.user))
        return user

    }

    componentDidMount() {
    this.findUser()
    }

    handleDeleteButton=()=>{
        console.log(this.state.user)
    Api.deleteItem(this.state.user.id)

}

    render() {
        const {user} = this.state
        return (
            <div>
                eeefefefefef

                <div>
                    <input name='name' type="text"/>
                </div>
                <>
                    edit
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
                                <button onClick={()=>this.handleDeleteButton} className="ui negative button">Delete</button>

                                {/*<img src={user.cat} alt={user.cat}/>*/}
                            </div>
                        </Link>
                    </div>
                </>
            </div>
        )
    }
}
// import React from "react";
// import Api from "../API/API";
// import { Link } from "react-router-dom";
// import axios from "axios";
//
// const API='https://61c2f2dc9cfb8f0017a3e7c8.mockapi.io/users/'
//
//
// const getUser2=(id)=>{
//     let user = axios.get(API+id)
//     console.log('user',user)
//     return user
//
// }
//
//
// export default class UserEditPage extends React.Component {
//     // state = Object.assign({}, Api.getUser(this.props.id));
//     state={user: Api.getUser(this.props.id)}
//
//     onStatusChange = (e) => {
//         this.setState({name: e.target.value});
//     }
//     //
//     // onDescriptionChange = (e) => {
//     //     this.setState({name: e.target.value});
//     // }
//
//     onSave = () => {
//         console.log('j',this.state)
//         Api.updateUser(this.state)
//     }
//     onDelete= () => {
//         Api.deleteItem(this.props.id)
//
// }
//     render() {
//         console.log(this.state)
//         return <>
//             <div>
//                 <label>Name:
//                     <input type="text" value={this.state.name} onChange={this.onStatusChange} />
//                 </label>
//             </div>
//
//             {/*<div>*/}
//             {/*    <label>Description:*/}
//             {/*        <input type="text" value={this.state.description} onChange={this.onDescriptionChange} />*/}
//             {/*    </label>*/}
//             {/*</div>*/}
//
//             <Link to={"/"}>
//                 <button className="ui button" onClick={this.onSave}>Save</button>
//                 <button className="ui button" onClick={this.onDelete}>Delete</button>
//             </Link>
//         </>
//     }
// }
