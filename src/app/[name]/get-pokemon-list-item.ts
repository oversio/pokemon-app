import { z } from "zod";

const ApiGetPokemonListItem = z.object({
  name: z.string(),
  types: z.array(
    z.object({
      type: z.object({
        name: z.string(),
      }),
    }),
  ),
  weight: z.number(),
  height: z.number(),
  sprites: z.object({
    other: z.object({
      "official-artwork": z.object({
        front_default: z.string().nullable(),
      }),
    }),
  }),
});

export type ApiGetPokemonListItem = z.infer<typeof ApiGetPokemonListItem>;

export function getPokemonListTransformer<T extends z.infer<typeof ApiGetPokemonListItem>>({
  name,
  types,
  weight,
  height,
  sprites,
}: T) {
  return {
    name,
    types: types.map(({ type }) => type.name),
    weight,
    height,
    image: sprites.other["official-artwork"].front_default,
  };
}

export const GetPokemonListItem = ApiGetPokemonListItem.transform(getPokemonListTransformer);
export type GetPokemonListItem = z.infer<typeof GetPokemonListItem>;
