
import React from "react";
import User from "../User/User";
import Api, {axoisApi} from "../API/API";
import UserEditPage from "../USerEditPage/UserEditPage";
import {Link} from "react-router-dom";
// import {axoisApi} from "../API/API";

export default class USerShowPage extends React.Component {
    // state = Object.assign({},
    //     Api.getUser(this.props.id))
    // state = Object.assign({},Api.getUser(this.props.id))
    state = {user: {}}

    // //
    findUser = async () =>{
       let user= await axoisApi.get(`/${this.props.id}`)
        // console.log(user)
        console.log('user',user)
    //
        let currentUser = {
           name:user.data.name,
            id:user.data.id,
            address:user.data.address,
            image:user.data.image
        }
        this.setState({user:currentUser},()=>console.log('hghfgh',this.state.user))
        return user

    }
    componentDidMount() {
        this.findUser()
    }
    handleDeleteButton= async ()=> {
        console.log('click')
        const responce = await axoisApi.delete(`${this.state.user.id}`);
        console.log('ddd',responce)
        this.setState({user:{}},()=>  this.props.history('/'))
       // return  this.props.history('/')


    }
    render() {


        const{user }=this.state
        return (
            <div>
                fffe
                {/*<img src={this.state.user.image} alt=""/>*/}
                {/*{this.state.user.name }*/}
                {/*{this.state.user.name }*/}
                <div className='Show-users' key={this.state.user.id}>
                {/*    {this.state.id}*/}
                {/*    <UserEditPage user={this.state.user}/>*/}
                </div>

                <div>
                    <>
                        editdadw
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
                                    <Link to={`/user/edit/${user.id}`}> Navigate to Users page
                                    <button className="ui button">Edit</button>
                                    </Link>
                                    <button onClick={()=>this.handleDeleteButton()} className="ui negative button">Delete</button>

                                    {/*<img src={user.cat} alt={user.cat}/>*/}
                                </div>
                            </Link>
                        </div>
                    </>
                </div>


            </div>
        )
    }
}