import { AxiosError } from "axios";
import useSWR from "swr";

import { ApiEntryPoint } from "@/data/api-entry-point";
import { fetcher } from "@/data/fetcher";

import { PokemonList } from "./types";

export function useGetPokemonList(page: number) {
  return useSWR<PokemonList, AxiosError>(ApiEntryPoint.getList(page), async (url: string) => fetcher(url, PokemonList));
}
