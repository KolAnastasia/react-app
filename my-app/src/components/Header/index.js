import style from './style.module.css'

const Header = ( { title, descr}) => {
    return (
        <> 
            <header class={style.root}>
                <div class={style.forest}></div>
                <div class={style.container}>
                    <h1>{title}</h1>
                    <p>{descr}</p>
                </div>
            </header>
        </>
    )
}

export default Header;