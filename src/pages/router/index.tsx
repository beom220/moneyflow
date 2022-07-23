import { Routes,Route } from "react-router-dom";
import Main from "../main";


export default function Router(){
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
        </Routes>
    )
}