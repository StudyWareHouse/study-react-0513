import { useEffect, useState } from "react";
import { pokemonAPI, sharePokemonAPI } from "../api/requests";
import { PokemonImage } from "../components";
import { useParams } from "react-router-dom";

// interface PokemonInfo {
//   id: string;
//   name: string;
// }

// interface PokemonsInfo {
//   count: number,
//   pokemons: PokemonInfo[]
// }

export default function MyPokemon() {
  const { id: friendId } = useParams();
  const [pokemonsInfo, setPokemonsInfo] = useState({ count: 0, pokemons: [] });

  useEffect(() => {
    const setupPokemon = async () => {
      const response = await pokemonAPI().getPokemons();
      setPokemonsInfo(response.data);
    };

    setupPokemon();
  }, []);

  const onSelectSharePokemon = (id = '') => {
    if (!id) return;
    
    sharePokemonAPI().sharePokemon({ pokemonId: id, friendId });
  }

  return (
    <div>
      <h2>친구에게 맞는 포켓몬 보내기</h2>
      <ul>
        {pokemonsInfo.pokemons.map((pokemon) => {
          return (
            <li key={pokemon.id}>
              <PokemonImage {...pokemon} />
              <button onClick={() => onSelectSharePokemon(pokemon.id)}>선택하기</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
