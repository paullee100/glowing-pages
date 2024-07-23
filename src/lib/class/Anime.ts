export class Anime {
  japTitle!: string;
  engTitle!: string;
  img!: string;
  episodes!: number;
  rating!: string;
  description!: string;
  type!: string;
  aired!: string;
  premiered!: string;
  studios!: string;
  source!: string;
  genres!: string[];
  themes!: string[];
  duration!: string;

  constructor(
    engTitle: string,
    japTitle: string,
    img: string,
    episodes: number,
    rating: string,
    description: string,
    watchshow: string[],
    type: string,
    aired: string,
    premiered: string,
    studios: string,
    source: string,
    genres: string[],
    themes: string[],
    duration: string
  ) {
    Object.assign(this, {
      engTitle,
      japTitle,
      img,
      episodes,
      rating,
      description,
      watchshow,
      type,
      aired,
      premiered,
      studios,
      source,
      genres,
      themes,
      duration,
    });

    this.japTitle = japTitle === '' ? engTitle : japTitle; 
  }
}
