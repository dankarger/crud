import React from "react";
import { useParams } from "react-router-dom";
import USerShowPage from "./USerShowPage";
import UserEditPage from "../USerEditPage/UserEditPage";

export default function UserShowPageWrapper(props) {
    const { id } = useParams();
    // const usersList = props.usersList
    // console.log('id',id,usersList)

    return (<USerShowPage id={id}> </USerShowPage>)
    // return (<UserEditPage id={id}> </UserEditPage>)
}