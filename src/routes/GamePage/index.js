import s from './style.module.css';
import { useState } from 'react';
import MenuHeader from '../../components/MenuHeader';
import PokemonCard from '../../components/PokemonCard';


import POKEMONS from '../../pokemons.json';
import { Link } from 'react-router-dom';


const GamePage = ({}) => {

    const [pokemons, setPokemons] = useState([...POKEMONS]);

    const handleOpenPokemon = (id) => {
        console.log('card2')
        setPokemons(pokemons.map(item => {
           if(item.id === id) {
               item.active = !item.active 
           }
           console.log('card2')
           return item

          
        }))
    }
    return (
        <>
            <MenuHeader />
            <div >
            
                <div className={s.flex} > 
                {
                    pokemons.map((item) => 
                    <PokemonCard 
                    onClick={handleOpenPokemon}
                    key={item.id}
                    name={item.name}
                    img={item.img}
                    id={item.id} 
                    type={item.type}
                    values={item.values}
                    isActive={item.active}
                    
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