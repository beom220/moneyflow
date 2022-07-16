import {NavLink} from "react-router-dom";
import Icon from '@mui/material/Icon';




export default function FixedBottomNavigation() {

    return (
        <nav className="navigation-bar">
            <NavLink to="/menu2">
                <Icon>receipt_long</Icon>
            </NavLink>
            <NavLink to="/menu1">
                <Icon>receipt_long</Icon>
            </NavLink>
            <NavLink to="/">
                <Icon>home</Icon>
            </NavLink>
        </nav>
    );
}

