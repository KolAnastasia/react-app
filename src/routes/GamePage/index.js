import { useRouteMatch, Route, Switch } from 'react-router-dom';


import StartPage from "./routes/StartPage";
import BoardPage from "./routes/BoardPage";
import FinishPage from "./routes/FinishPage";
import { PokemonContext } from '../../context/pokemonContext';
import { useState } from 'react/cjs/react.development';

const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({});
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

    return (
        <PokemonContext.Provider value={{
            pokemon: selectedPokemons,
            onSelectedPokemons: handleSelectedPokemons
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