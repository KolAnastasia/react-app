import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyB-R1u4cVkyg3Oe1BbFgHPjHFG40vlegrI",
  authDomain: "pokemon-4885d.firebaseapp.com",
  databaseURL: "https://pokemon-4885d-default-rtdb.firebaseio.com",
  projectId: "pokemon-4885d",
  storageBucket: "pokemon-4885d.appspot.com",
  messagingSenderId: "402464015112",
  appId: "1:402464015112:web:0bda8a01b9bec1c20e62bd"
};


firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {

    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }

  getPokemonsSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val())
    })
  }

  offPokemonsSoket = () => {
    this.database.ref('pokemons').off()
    
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`polemons/${key}`).set(pokemon);
  }

  addPokemon = (pokemon, cb) => {
        const newPokemonKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/' + newPokemonKey).set(pokemon).then(() => cb )
  }


}



export default Firebase;