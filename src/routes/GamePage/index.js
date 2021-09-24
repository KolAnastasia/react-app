import { useRouteMatch, Route, Switch } from 'react-router-dom';


import StartPage from "./routes/StartPage";
import BoardPage from "./routes/BoardPage";
import FinishPage from "./routes/FinishPage";
import { PokemonContext } from '../../context/pokemonContext';
import { useState } from 'react/cjs/react.development';

const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({});
    const [player1Cards, setPlayer1Cards] = useState([]);
    const [player2Cards, setPlayer2Cards] = useState([]);
    const [player1Win, setPlayer1Win] = useState([]);
    const match = useRouteMatch();
    const handleSelectedPokemons = (key, pokemon) => {
        setSelectedPokemons(prevState => {
            if(prevState[key]) {
                const copyState = {...prevState};
                delete copyState[key];

                return copyState
            }
            return {
                ...prevState,
                [key]: pokemon,
            }
        })
    }

    const handleGameFinish = (player1Cards, player2Cards, isWin)=>{
        setPlayer1Cards(player1Cards);
        setPlayer2Cards(player2Cards);
        setPlayer1Win(isWin) ;
    }

    return (
        <PokemonContext.Provider value={{
            pokemons: selectedPokemons,
            onSelectedPokemons: handleSelectedPokemons,
            player1Cards: player1Cards,
            player2Cards: player2Cards,
            player1Win: player1Win,
            onGameFinish: handleGameFinish
        }}>
        <Switch>
            <Route path={`${match.path}/`} exact component={StartPage} />
            <Route path={`${match.path}/board`} component={BoardPage} />
            <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;