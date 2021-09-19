import s from './style.module.css';
import { useState, useEffect } from 'react';
import MenuHeader from '../../components/MenuHeader';
import PokemonCard from '../../components/PokemonCard';

import { Link } from 'react-router-dom';
import database from '../../services/firebase';


const GamePage = ({}) => {

    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        });
        
    }, [pokemons]);



    const handleOpenPokemon = (id, objID, isActive) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id == id) {
                    pokemon.active = !isActive;
                    database.ref('pokemons/' + objID).set({
                        ...pokemon
            
                    });
                };
        
                acc[item[0]] = pokemon;
                
                return acc;
            }, {});
        });

       
    }


    const addPokemon = () => {
        const cardsArr = Object.entries(pokemons)
        const pokemon = cardsArr[1][1];
        pokemon.active = false; 
        const newPokemonKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newPokemonKey).set(pokemon);
    }



    return (
        <>
            <MenuHeader />
            <div className={s.wrapper}>
                <div className={s.buttonAdd} onClick={addPokemon}> Add new Pokemon </div>
                <div className={s.flex} > 
                {
                    
                   Object.entries(pokemons).map(([key, {name, img, id, type, values, active}]) => 
                    <PokemonCard 
                    onClick={handleOpenPokemon}
                    key={key}
                    objID={key}
                    name={name}
                    img={img}
                    id={id} 
                    type={type}
                    values={values}
                    isActive={active}
                    
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

export default GamePage;