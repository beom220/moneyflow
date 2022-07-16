import MyWallets from "./wallet";
import React from "react";
import "../../assets/css/main.css"
import User from "./user";

export default function MainPages(){
    return (
        <>
            <User/>
            <MyWallets/>
        </>
    )
}