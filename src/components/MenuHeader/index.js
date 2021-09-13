import { useState } from "react";

import Menu from '../Menu';
import NavBar from '../NavBar';

const MenuHeader = () => {
    const [state, setActive] = useState(false)
    const handleCnahgeIcon = () => {
        setActive(!state)
    }

    return (
        <>
            <Menu
                state = {state}
            />
            <NavBar 
                onClickButton = {handleCnahgeIcon}
                state = {state}
            />
        </>
    );
};

export default MenuHeader;