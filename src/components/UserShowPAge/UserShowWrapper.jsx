import React from "react";
import { useParams } from "react-router-dom";
import USerShowPage from "./USerShowPage";

export default function UserShowPageWrapper() {
    const { id } = useParams();

    return (<USerShowPage id={id}></USerShowPage>)
}