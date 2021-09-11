import style from './style.module.css'




const Layout = ({title, descr, urlBg, colorBg}) => {
    const bgRoot = urlBg ? {background: `url("${urlBg}"`} : 
    colorBg ?  {background: "red"} : {}
    return (
    <section class={style.root} style={bgRoot}> 

       <div class={style.wrapper}>
            <article>
                <div class={style.title}>
                    <h3> { title }</h3>
                    <span class={style.separator}></span>
                </div>
                <div class={[style.desc, style.full]}>
                    <p> { descr } </p>
                </div>
            </article>
        </div> 
    </section>
    
    )
}

export default Layout;