import Card from "../../components/card";
import {Fragment} from "react";

interface User {
    id:number,
    name:string
}

export default function User(){
    const user:User = {
        id:1,
        name:'홍길동'
    }

    return (
        <>
            <Card>
                <div className="card-contents">
                    <h3>{user.name}님</h3>
                    <p style={{padding:"1rem 0"}}>안녕하세요</p>
                </div>
            </Card>
        </>
    )
}