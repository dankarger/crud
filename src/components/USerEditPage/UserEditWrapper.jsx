import React from "react";
import { useParams } from "react-router-dom";
import UserEditPage from "./UserEditPage";

export default function UserEditPageWrapper() {
    const { id } = useParams();

    return (<UserEditPage id={id}></UserEditPage>)
}