export default function Random(){
    const PokeNum = Math.floor(Math.random() * 151) + 1;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${PokeNum}.png`
    return {url, PokeNum}
};