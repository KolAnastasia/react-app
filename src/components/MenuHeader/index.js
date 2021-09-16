import { useState } from "react";

import Menu from '../Menu';
import NavBar from '../NavBar';

const MenuHeader = ({bgActive}) => {
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
                bgActive={bgActive}
            />
        </>
    );
};

export default MenuHeader;