import s from './style.module.css';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MenuHeader from '../../../../components/MenuHeader';
import PokemonCard from '../../../../components/PokemonCard';
import { Link } from 'react-router-dom';
import { FireBaseContext } from '../../../../services/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';


const StartPage = ({}) => {

    const firebase = useContext(FireBaseContext)
    const history = useHistory();
    const pokemonContext = useContext(PokemonContext);


    const [pokemons, setPokemons] = useState({});
   
    useEffect(() => {
        firebase.getPokemonsSoket((pokemons) => {
            setPokemons(pokemons);
        })

        return () => firebase.offPokemonsSoket();
        
    }, []);



    const handleChangeSelected = (key) => {
        
        const pokemon = {...pokemons[key]};
        pokemonContext.onSelectedPokemons(key, pokemon);


         setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected,
            }

        }))

       
    }

    const handleStartGame = () => {
        history.push('game/board');
    }

    return (
        <>
            <MenuHeader />
            <div className={s.wrapper}>
                <div className={s.buttonAdd} 
                    onClick={handleStartGame}
                    disabled={Object.keys(pokemonContext.pokemons).length < 5}
                > Start Game </div>
                <div className={s.flex} > 
                {
                    
                   Object.entries(pokemons).map(([key, {name, img, id, type, values, selected, className, minimize}]) => 
                    <PokemonCard 
                    onClick={ () => {
                        if (Object.keys(pokemonContext.pokemons).length < 5 || selected) {
                            handleChangeSelected(key)
                        }

                        else {

                        }
                        }
                    }
                    key={key}
                    objID={key}
                    name={name}
                    img={img}
                    id={id} 
                    type={type}
                    values={values}
                    isActive={true}
                    minimize={minimize} 
                    className={s.card}
                    isSelected={selected}
                    
                    />) 
                }
                </div>

                <Link to="/" className={s.btnBack}>
                    Back to Home 
                </Link>
            </div>
        </>
    );
};

export default StartPage;