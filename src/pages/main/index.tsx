import React from "react";
import Wallets from "./wallets";
import "../../assets/css/main.css"
import UserCard from "./user";
import Register from "./register";

export default function MainPages(){
    return (
        <>
            <UserCard/>
            <Wallets/>
            <Register/>
        </>
    )
}