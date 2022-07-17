import {ReactElement} from "react";

interface PropType {
    children:ReactElement;
}

export default function Card({children}:PropType) {
    return (
        <div className="card">
            {children}
        </div>
    );
}