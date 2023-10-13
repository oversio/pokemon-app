import { PokemonGrid } from "@/app/components/pokemon-grid";

export interface PokemonListItem {
  name: string;
  url: string;
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2">
      <h1 className=" text-6xl mb-5 text-teal-600">{`Gotta cache 'em all`}</h1>
      <PokemonGrid />
    </main>
  );
}
