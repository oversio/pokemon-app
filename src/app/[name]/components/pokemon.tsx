import { Skeleton } from "@/components/ui/skeleton";

import { GetPokemonListItem } from "../get-pokemon-list-item";

type PokemonProps = {
  pokemon: GetPokemonListItem | undefined | null;
  isLoading: boolean;
};

export function Pokemon(props: PokemonProps) {
  return (
    <div className="flex justify-center flex-col items-center">
      <h3 className="text-3xl capitalize text-teal-600">
        {props.isLoading ? <Skeleton className=" w-44 h-6" /> : props.pokemon?.name}
      </h3>
      <div
        className={`grid place-items-center min-h-[475px] min-w-[475px] bg-teal-500 ${
          props.isLoading && "animate-pulse"
        } rounded-xl my-6`}
      >
        {props.isLoading ? null : <img src={props.pokemon?.image} alt={props.pokemon?.name} />}
      </div>
      <p className="text-sm flex justify-center items-center">
        <strong>Types: </strong>
        {props.isLoading ? <Skeleton className=" w-20 h-4 ml-2" /> : props.pokemon?.types.join(", ")}
      </p>
      <p className="text-sm flex justify-center items-center">
        <strong>Height: </strong>
        {props.isLoading ? <Skeleton className=" w-20 h-4 ml-2" /> : `${props.pokemon?.height ?? 0 * 10} cm`}
      </p>
      <p className="text-sm flex justify-center items-center">
        <strong>Weight: </strong>
        {props.isLoading ? <Skeleton className=" w-20 h-4 ml-2" /> : `${props.pokemon?.weight ?? 0 / 10} kg`}
      </p>
    </div>
  );
}
