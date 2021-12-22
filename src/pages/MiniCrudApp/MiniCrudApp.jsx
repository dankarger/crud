import React from "react";
import UsersList from "../../components/UserList/UsersList";
import axios from "axios";
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import Header from "../../components/Header/Header";
import HomePage from "../../components/HomePage/HomePage";
// import UserEditPage from "../../components/USerEditPage/UserEditPage";
import UserShowPage from "../../components/UserShowPAge/USerShowPage";
import UserEditPageWrapper from "../../components/USerEditPage/UserEditWrapper";
import UserShowPageWrapper from "../../components/UserShowPAge/UserShowWrapper";
import Api from "../../components/API/API";

import DATA from "../../components/API/API";
import UserEditPage from "../../components/USerEditPage/UserEditPage";



const API='https://61c2f2dc9cfb8f0017a3e7c8.mockapi.io/'

const HeaderComponent = () =>{
    return (
        <div>
            fdsdfsdf111
            <Header />
        </div>
    )
}




class MiniCrudApp extends React.Component {
    // state = {usersList:[]}
    state = {
        userList: Api.getListUsers()
    }

    getUserListFromApi=async ()=>{
       const data = await axios.get(API+'users');
       //   const data=[{id:1,name:'sssoss',image:'some_url',cat:'fdfdfdf'},{id:2,name:'ssffsoss',image:'some_url2',cat:'cat_url2'}]
       //  const data = DATA
       //  console.log(data)
       this.setState({usersList:data.data},()=>console.log('d',data))
    }





    componentDidMount() {
        this.getUserListFromApi()
        // console.log('ff',this.state.userList)

    }

    render(){
        return(
            <div>
                <BrowserRouter>
                    <Routes>
                            <Route path='/'  element={<Header /> }/>
                            <Route path='/'  exact element={<HomePage />} />
                            <Route path='/users'  element={ <UsersList userList={this.state.userList}/>}/>
                            {/*<Route path='/user/edit/:id'  element={<UserEditPageWrapper /> }/>*/}
                            {/*  <Route path='/user/:id'  element={<UserShowPageWrapper /> }/>*/}

                    </Routes>
                </BrowserRouter>
gfdfg
            </div>
        )
    }
}

export default MiniCrudApp
