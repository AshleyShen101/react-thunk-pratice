export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";

type PokemonAbility = {
  ability: {
    name: string
    url: string
  }
}

type PokemonSprites = {
  front_default: string
}

type PokemonLoading {
  type: typeof POKEMON_LOADING;
}

type PokemonStat = {
  base_stat: number
  stat: {
    name: string
  }
}

interface PokemonFail {
  type: typeof POKEMON_FAIL;
}

interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS, 
  payload: {
    abilities: PokemonAbility[],
    sprites: PokemonSprites,
    stats: PokemonStat[] 
  }
}

type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess;
