import { useEffect, useState } from "react";
import { sharePokemonAPI } from "../api/requests";
import { PokemonImage } from "../components";

const myId = "111111";

export default function MyPokemon() {
  const [myPokemons, setMyPokemons] = useState([]);

  useEffect(() => {
    const setPokemons = () => {
      const sharedPokemons = sharePokemonAPI().getSharedPokemon({ myId });
      setMyPokemons(sharedPokemons);
    };

    setPokemons();
  }, []);

  return (
    <div>
      내 포켓몬 상자 <button>상자 주소 공유하기</button>
      <h1>받은 포켓몬들</h1>
      <ul>
        {myPokemons.map((pokemonId, index) => {
          return (
            <li key={index}>
              <PokemonImage id={pokemonId} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
