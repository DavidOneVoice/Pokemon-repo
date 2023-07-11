import { useState } from "react";
import Random from "./Random";
import "./RandomPokemon.css"

function RandomPokemon(){
    const data = Random();
    const [pokenum, setPokenum] = useState(data.PokeNum);
    const [pokemon, setPokemon] = useState(data.url);
    const getPokemon = () => {
        setTimeout(function() {
            const data = Random();
            setPokemon(data.url);
            setPokenum(data.PokeNum);
        }, 1000);
    };
    return(
        <div className="RandomPokemon">
            <h1>Pokemon Number #{pokenum}</h1>
            <img src={pokemon} alt="Pokemon Image"/>
            <button onClick={getPokemon} type="button">Get Random Pokemon</button>
        </div>
    );
};
export default RandomPokemon