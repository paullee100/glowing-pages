import React from "react";
import { Metadata } from 'next';
import AnimePage from "@/components/animeSection/animePage";

export const metadata: Metadata = {
  title: "Anime Watched List"
}

const AnimeWatchedPage = () => {

  return (
    <div>
      <AnimePage />
      
    </div>
  );
};

export default AnimeWatchedPage;
