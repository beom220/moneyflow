interface PropType {
    children:string;
    outline?:boolean;
}


export function Icon({children, outline}:PropType) {
    return (
        <span className={outline? "material-icons-outlined icons" : "material-icons icons"} >
            {children}
        </span>
    )
}
