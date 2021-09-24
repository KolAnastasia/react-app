import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard';
import { PokemonContext } from '../../../../context/pokemonContext';
import PlayerBoard from './components/PlayerBoard';
import s from './style.module.css';

const counterWin = (board, player1, player2) =>{
    let player1Count = player1.length;
    let player2Count = player2.length;
    board.forEach(element => {
        if(element.card.possession === 'red'){
            player2Count++;
        }
        if(element.card.possession === 'blue'){
            player1Count++;
        }
    });
    return [player1Count, player2Count];
}

const BoardPage = () => {
    //const { pokemons } = useContext(PokemonContext);
    const pokemonContext = useContext(PokemonContext);
    const [board, setBoard] = useState([])
    const [player2, setPlayer2] = useState([])
    const [player1, setPlayer1] = useState(()=>{
        return Object.values(pokemonContext.pokemons).map(item=>({
            ...item,
            possession:'blue'
        }))
    })
    let player1AllCards = Object.values(pokemonContext.pokemons);
    const [player2AllCards, setPlayer2AllCards] = useState([])
    const [choiceCard, setChoiceCard] = useState(null);
    const [steps, setSteps] = useState(0)
    const history = useHistory()
    useEffect(async ()=>{
        const boardRequest = await fetch("https://reactmarathon-api.netlify.app/api/board")
        const boardResponse = await boardRequest.json();
        setBoard(boardResponse.data);
        
        const player2Request = await fetch("https://reactmarathon-api.netlify.app/api/create-player");
        const player2Response = await player2Request.json();
        setPlayer2AllCards(player2Response.data);
        setPlayer2(()=>{
            return player2Response.data.map(item=>
                ({
                    ...item,
                    possession:'red'
                })
            )
        })
        
    }, [])

    if(Object.keys(pokemonContext.pokemons).length === 0){
        history.replace("/game")
    }
    const handleClickCard = (id)=>{

    }
    const handleClickBoardPlate = async (position)=>{
        if(choiceCard){
            const params = {
                position,
                card: choiceCard,
                board
            }
            const req = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const response = await req.json();
            
            
            if(choiceCard.player === 1) {
                setPlayer1(prevState => prevState.filter(item=>item.id !== choiceCard.id))
            }
            if(choiceCard.player === 2) {
                setPlayer2(prevState => prevState.filter(item=>item.id !== choiceCard.id))
            }
            setBoard(response.data);
            setSteps(prevState=>{
                const count = prevState + 1;
                return count;
                
            })
        }
    }

    useEffect(()=>{
        if(steps===9){ 
            const [count1, count2] = counterWin(board, player1, player2);
            let isWin = false;
            if(count1>count2) {
                alert("WIN")
                isWin = true;
            }
            else if(count1<count2){
                alert("LOSE");
            }
            else {
                alert("DRAW")
            }
            pokemonContext.onGameFinish(player1AllCards, player2AllCards, isWin);
            history.replace('/game/finish');
        }
    }, [steps])
    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard cards={player1} onClickCard={(card)=>setChoiceCard(card)} player={1}/>
            </div>
                        
            <div className={s.board}>
                {
                    board.map(item=>{
                        return <div key={item.position} className={s.boardPlate} onClick={()=>!item.card && handleClickBoardPlate(item.position)}>
                            {
                                item.card && <PokemonCard {...item.card} minimize/>
                            }
                        </div>
                    })
                }
                
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard cards={player2} onClickCard={(card)=>setChoiceCard(card)} player={2}/>
            </div>
        </div>
    );
};

export default BoardPage;