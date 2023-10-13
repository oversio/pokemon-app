import { z } from "zod";

const ApiPokemonListItem = z.object({
  name: z.string(),
  url: z.string(),
});

export type ApiPokemonListItem = z.infer<typeof ApiPokemonListItem>;

export const PokemonListItem = ApiPokemonListItem;
export type PokemonListItem = z.infer<typeof PokemonListItem>;

const ApiPokemonList = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(ApiPokemonListItem),
});

export type ApiPokemonList = z.infer<typeof ApiPokemonList>;

export const PokemonList = ApiPokemonList;
export type PokemonList = z.infer<typeof PokemonList>;
