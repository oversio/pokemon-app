import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { useGetPokemon } from "../[name]/use-get-pokemon";

interface PokemonGridItemProps {
  name: string;
}

export function PokemonGridItem({ name }: PokemonGridItemProps) {
  const { data: pokemon, isLoading } = useGetPokemon(name);

  if (isLoading) {
    return <Skeleton className="w-full h-[354px]" />;
  }

  const image =
    pokemon?.image ??
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png";

  return (
    <Card className=" h-full">
      <CardHeader className="text-center p-0 h-full">
        <div className="relative w-full h-full overflow-hidden rounded-lg bg-clip-border bg-teal-400 shadow-lg">
          <h5 className="mt-2 block capitalize font-poppins text-2xl text-teal-800 antialiased">{pokemon?.name}</h5>
          <img src={image} width="100%" height="auto" alt="profile-picture" />
        </div>
      </CardHeader>
    </Card>
  );
}
