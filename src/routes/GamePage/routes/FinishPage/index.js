import { PokemonContext } from '../../../../context/pokemonContext';
import { FireBaseContext } from '../../../../services/firebaseContext';
import { useContext, useState, useEffect} from 'react';
import s from './style.module.css';
import { useHistory } from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard';
const FinishPage = () => {
    const {player1Cards, player2Cards, player1Win} = useContext(PokemonContext);
    const history = useHistory()
    if(player1Cards.length === 0){
        history.replace("/game")
    }
    const firebase = useContext(FireBaseContext)
    const [cards, setCards] = useState([]);
    const handleEndGame = async ()=>{
        const selectedCard = cards.filter(card=>card.selected);
        if(selectedCard && selectedCard.length>0){
            const pokemon = selectedCard[0]
            await firebase.addPokemon(pokemon);

            history.replace('/game');
        }
        
        
    }
    useEffect(()=>{
        setCards(player2Cards);
    }, [])
    
    const handleCardSelected = (id)=>{
        if(player1Win){
            setCards(prevState => {
                let newState = [...prevState]
                newState.forEach(card => {
                    if(card.id === id){
                        card.selected = !card.selected
                    }
                    else {
                        card.selected = false;
                    }
                });
                return newState;
            })
        }
    }
    return (
        <div className={s.wrapper}>
            <div className={s.flex}>
                {
                    player1Cards.map(({name, img, id, type, values, selected, className, minimize}) =>{
                        return <PokemonCard 
                        key={id}
                        objID={id}
                        name={name}
                        img={img}
                        id={id} 
                        type={type}
                        values={values}
                        isActive={true}
                        minimize={minimize} 
                        className={s.card}
                        isSelected={selected}
                        
                        />
                    })
                }
            
            </div>
            <div className={s.buttonAdd} 
                    onClick={handleEndGame}
                > End Game </div>
            <div className={s.flex}>
            {
                    cards.map(({name, img, id, type, values, selected, className, minimize}) =>{
                        return <PokemonCard 
                        onClick={ () => {
                                handleCardSelected(id)
                            }
                        }         
                        key={id}
                        objID={id}
                        name={name}
                        img={img}
                        id={id} 
                        type={type}
                        values={values}
                        isActive={true}
                        minimize={minimize} 
                        className={s.card}
                        isSelected={selected}
                        
                        />
                    })
                }
            </div>
        </div>
    );
};

export default FinishPage;