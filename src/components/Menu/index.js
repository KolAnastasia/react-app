import cn from 'classnames';
import s from './style.module.css'
import { Link } from 'react-router-dom';
const MENU = [ {
    title: 'HOME',
    to: 'home',
    },
    {
        title: 'GAME',
        to: 'game',
    }
    ,
    {
        title: 'ABOUT',
        to: 'about',
    },
    { 
        title: 'CONTACT',
        to: 'contact',
    },
]


const Menu = ({state, onClickButton}) => {
    const handleCloseMenu = () => {
        onClickButton && onClickButton();
    }
    return (
        <div className={cn(s.menuContainer, {[s.active]: state, [s.deactive]: !state})}>
        <div className={s.overlay} /> 
        <div className={s.menuItems}>
            <ul>
                {
                    MENU.map(({title, to}, index) => (
                        <li key={index} onClick={handleCloseMenu}> 
                            <Link to={to}> 
                                {title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
        </div>

    );
};

export default Menu;