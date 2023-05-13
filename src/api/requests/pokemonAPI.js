import { pokeInstance } from "../instances";

const pokemonAPI = () => {
    return {
        async getPokemons(payload = {}) {
            // const { axiosConfig = {} } = payload;
            const response = await pokeInstance.get('pokemon')
            const data = response.data;
            const pokemons = data.results.map((pokemon = { url: "" }) => {
                const urls = pokemon.url.split("/");
                const id = urls[urls.length - 2];
                return { ...pokemon, id };
            });

            return  {
                ...response,
                data: {...data, pokemons}
            }
        },
        getPokemon(payload = {}) {
            const { pathParameters = { name: 'ditto' } } = payload;
            const { name } = pathParameters;

            return pokeInstance.get(`pokemon/${name}`)
        },
    }
}

export { pokemonAPI }