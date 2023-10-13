import { AxiosError } from "axios";
import useSWR from "swr";

import { ApiEntryPoint } from "@/data/api-entry-point";
import { fetcher } from "@/data/fetcher";

import { GetPokemonListItem } from "./get-pokemon-list-item";

export function useGetPokemon(name: string) {
  return useSWR<GetPokemonListItem | null, AxiosError>(ApiEntryPoint.getItem(name), async (url: string) => {
    try {
      return await fetcher(url, GetPokemonListItem);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        return null;
      } else {
        throw error;
      }
    }
  });
}
