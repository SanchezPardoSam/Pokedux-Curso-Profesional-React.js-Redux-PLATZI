import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlice";


const initialState = {
    pokemons: [],
    pokemonsFiltered: [],
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true));
        const pokeRest = await getPokemon()
        const pokemonsDetailed = await Promise.all(
            pokeRest.map(
                pokemon => getPokemonDetails(pokemon))
        );

        dispatch(setPokemons(pokemonsDetailed));
        dispatch(setLoading(false));
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemonsFiltered = action.payload;
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemonsFiltered.findIndex(
                (pokemon) => {
                    return pokemon.id === action.payload.pokemonId;
                }
            );

            if (currentPokemonIndex > 0) {
                const isFavorite = state.pokemonsFiltered[currentPokemonIndex].favorite;

                state.pokemonsFiltered[currentPokemonIndex].favorite = !isFavorite
                state.pokemons[currentPokemonIndex].favorite = !isFavorite
            }
        },
        setFind: (state, action) => {
            const pokemonFind = state.pokemonsFiltered.filter(pokemon => pokemon.name.includes(action.payload));

            state.pokemons = pokemonFind;
        }
    }
})

export const { setFavorite, setPokemons, setFind } = dataSlice.actions;

console.log(dataSlice);

export default dataSlice.reducer;