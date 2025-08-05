import React from "react";
import { URLEncoding } from "@/lib/data/const";
import { Anime } from "@/lib/class/Anime";
import AnimeData from "@/components/animeSection/animeData";
import { getANIMES } from "@/lib/data/animeData";

export function generateStaticParams() {
  const animes: Anime[] = getANIMES()

  return animes.map((title: Anime) => ({
    anime: title.engTitle,
  }));
}

const AnimePage = ({ params }: any) => {
  let { anime } = params;

  for (const url in URLEncoding) {
    anime = anime.replaceAll(url, URLEncoding[url as keyof Object]);
  }
  
  return (
    <div>
      <AnimeData anime={anime} />
    </div>
  );
};

export default AnimePage;
