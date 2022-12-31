import PokeCard from "./PokeCard";
import './PokeList.css'

const PokeList = ({ pokemons }) => {

    return <div className="PokeList">
        {
            pokemons.map((pokemon) => {

                const types = pokemon.types.map(elem =>
                    elem.type.name
                ).join(', ')

                return <PokeCard
                    name={pokemon.name}
                    key={pokemon.name}
                    image={pokemon.sprites.front_default}
                    skill={types}
                    id={pokemon.id}
                    favorite={pokemon.favorite}
                >
                </PokeCard>
            }
            )
        }
    </div>
}

export default PokeList