import style from './style.module.css'




const Layout = ({title, descr, urlBg, colorBg, children}) => {
    const bgRoot = urlBg ? {background: `url("${urlBg}"`} : 
    colorBg ?  {background: "red"} : {}
    return (
    <section className={style.root} style={bgRoot}> 

       <div className={style.wrapper}>
            <article>
                <div className={style.title}>
                    <h3> { title }</h3>
                    <span className={style.separator}></span>
                </div>
                <div className={`${style.desc} ${style.full}`}>
                   {children}
                   <p>{descr}</p>
                </div>
            </article>
        </div> 
    </section>
    
    )
}

export default Layout;