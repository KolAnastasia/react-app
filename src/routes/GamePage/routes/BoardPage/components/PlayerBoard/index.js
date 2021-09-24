import { useState } from "react";
import PokemonCard from "../../../../../../components/PokemonCard";
import s from "./style.module.css"
import cn from "classnames";

const PlayerBoard = ({cards, onClickCard, player})=>{
    const [isSelected, setSelected] = useState(null);
    
    return (
        <>
            {
                cards.map((item) => {
                    return <div className={cn(s.cardBoard, {
                                [s.selected]:isSelected ===item.id
                            })} 
                            onClick={()=>{
                                setSelected(item.id);
                                onClickCard && onClickCard({
                                    ...item,
                                    player
                                })
                            }}>
                        <PokemonCard
                        key={item.key}
                        name={item.name}
                        img={item.img}
                        id={item.id} 
                        type={item.type}
                        values={item.values}
                        isActive={true}
                        minimize   

                        />
                    </div> 
                   
                })
            }
        </>
    );
}
export default PlayerBoard