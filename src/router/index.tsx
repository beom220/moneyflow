import { Routes,Route } from "react-router-dom";
import MainPages from "../pages/main";

export default function Router(){
    return (
        <Routes>
            <Route path="/" element={<MainPages/>}/>
        </Routes>
    )
}