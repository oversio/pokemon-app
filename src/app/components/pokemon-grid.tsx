"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Paginator } from "@/components/paginator";

import { useGetPokemonList } from "../use-get-pokemon-list";
import { PokemonGridItem } from "./pokemon-grid-item";

export function PokemonGrid() {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page")?.toString() ?? "1");
  const { data, error } = useGetPokemonList(page);

  if (error)
    return (
      <div>
        failed to load <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-0 md:px-28 lg:px-52 mb-20">
        {data?.results.map(({ name }) => (
          <Link key={name} href={`/${name}`} className=" h-full">
            <PokemonGridItem name={name} />
          </Link>
        ))}
      </div>
      <Paginator currentPage={page} total={data?.count} />
    </>
  );
}
