import Image from "./Image";

const PokemonImage = (props) => {
    const { id, ...otherProps } = props;
    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`;
    
    return <Image
                alt={'Pokemon Image'}
                {...otherProps}
                src={src}
            />
}

export default PokemonImage;