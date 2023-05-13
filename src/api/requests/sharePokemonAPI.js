const sharePokemonAPI = () => {
    const SHARE_POKEMON_KEY = 'sharePokemon';
    return {
        sharePokemon(payload = { pokemonId: '', friendId: '' }) {
            const { pokemonId, friendId } = payload;
            const storedPokemonsData = localStorage.getItem(SHARE_POKEMON_KEY) || '{}'
            const storedPokemons = JSON.parse(storedPokemonsData);
            
            if (!(storedPokemons instanceof Object)) return;
            
            if (!storedPokemons[friendId]) storedPokemons[friendId] = [];
            
            storedPokemons[friendId].push(pokemonId);
            localStorage.setItem(SHARE_POKEMON_KEY, JSON.stringify(storedPokemons));
        },
        getSharedPokemon(payload = { myId: '' }) {
            const { myId } = payload;
            const storedPokemonsData = localStorage.getItem(SHARE_POKEMON_KEY) || '{}'
            const storedPokemons = JSON.parse(storedPokemonsData);
            
            if (!(storedPokemons instanceof Object)) return;
            
            const myPokemons = storedPokemons[myId];

            if (!myPokemons) return [];
            
            return myPokemons;
        },
    }
}

export {
    sharePokemonAPI
}