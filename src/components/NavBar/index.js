import cn from 'classnames';

import s from './style.module.css';


const NavBar = ({onClickButton, state, bgActive = false,}) => {
   const handleOpenIcon = () => {
    onClickButton && onClickButton()
   }
    return (
        <nav className={cn(s.root, {[s.bgActive]: bgActive})}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                LOGO
                </p>
            <div className={cn(s.menuButton, {[s.active]: state})} onClick={handleOpenIcon}>
                <span />
                </div>
            </div>
        </nav>
    )
}
export default NavBar;