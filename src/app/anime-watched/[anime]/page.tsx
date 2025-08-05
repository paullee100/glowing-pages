import React from "react";
import { URLEncoding } from "@/lib/data/const";
import { Anime } from "@/lib/class/Anime";
import AnimeData from "@/components/animeSection/animeData";
import { getANIMES } from "@/lib/data/animeData";
import { connectToDb } from "@/lib/utils";

export async function generateStaticParams() {
  const BASE_URL = process.env.WEBSITE_URL
  const animes: Anime[] = await fetch(`${BASE_URL}/api/anime/watched`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())

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
