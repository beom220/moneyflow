import { Routes,Route } from "react-router-dom";
import Main from "../main";
import Login from "../auth/login";
import Join from "../auth/join";


export default function Router(){
    return (
        <Routes>
            <Route path="/auth/join" element={<Join/>}/>
            <Route path="/auth/login" element={<Login/>}/>
            <Route path="/" element={<Main/>}/>
        </Routes>
    )
}