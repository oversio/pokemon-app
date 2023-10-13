"use client";

import Head from "next/head";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MdArrowBack } from "react-icons/md";

import { Pokemon } from "./components/pokemon";
import { useGetPokemon } from "./use-get-pokemon";

export default function Details() {
  const params = useParams();
  const pokemonName = (params.name ?? "") as string;
  const { data: pokemon, error, isLoading, isValidating } = useGetPokemon(pokemonName);

  return (
    <>
      <Head>{pokemon && <title>{`${pokemon.name} - details`}</title>}</Head>
      <section className="w-full md:w-1/3 lg:w-2/4 h-auto mx-auto">
        <div className="flex items-center gap-2">
          <Link href=".." className=" p-2 flex justify-center items-center rounded-full hover:bg-teal-100">
            <MdArrowBack size={24} />
          </Link>
          <h2 className="text-2xl capitalize text-teal-6<00">Volver</h2>
        </div>
        {error && <p>Uupps... Something went wrong!</p>}
        <Pokemon pokemon={pokemon} isLoading={isLoading || isValidating} />
      </section>
    </>
  );
}
