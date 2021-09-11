import s from './style.module.css';


const HeaderBlock = ({title, hideBackground = false, descr }) => {
    
    return (
        <div> 
            <div> 
                <h1 className={s.header}>{title}</h1>
                <p> 
                   {descr}
                </p>
            </div>
        </div>
    )
}

export default HeaderBlock;