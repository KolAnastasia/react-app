import style from './style.module.css'

import FirstBg from '../../assets/bg1.jpg'
import Thirdbg from '../../assets/bg2.jpg'


const Layout = ({title, descr, urlBg, colorBg}) => {
    const bgRoot = (urlBg == 'Firstbg') ? {background: `url("${FirstBg}"`} : 
    (urlBg == 'Thirdbg') ? {background: `url("${Thirdbg}"`} :
    colorBg ?  {background: "red"} : {}
    return (
    <section class={style.root} style={bgRoot}> 

       { <div class={style.wrapper}>
            <article>
                <div class={style.title}>
                    <h3> { title }</h3>
                    <span class={style.separator}></span>
                </div>
                <div class={[style.desc, style.full]}>
                    <p> { descr } </p>
                </div>
            </article>
        </div> }
    </section>
    
    )
}

export default Layout;