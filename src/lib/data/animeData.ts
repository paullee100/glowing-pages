// import { a_anime } from "../alphabets/a/aData";
// import { b_anime } from "../alphabets/b/bData";
// import { c_anime } from "../alphabets/c/cData";
// import { d_anime } from "../alphabets/d/dData";
// import { e_anime } from "../alphabets/e/eData";
// import { f_anime } from "../alphabets/f/fData";
// import { g_anime } from "../alphabets/g/gData";
// import { h_anime } from "../alphabets/h/hData";
// import { i_anime } from "../alphabets/i/iData";
// import { j_anime } from "../alphabets/j/jData";
// import { k_anime } from "../alphabets/k/kData";
// import { l_anime } from "../alphabets/l/lData";
// import { m_anime } from "../alphabets/m/mData";
// import { n_anime } from "../alphabets/n/nData";
// import { o_anime } from "../alphabets/o/oData";
// import { p_anime } from "../alphabets/p/pData";
// import { q_anime } from "../alphabets/q/qData";
// import { r_anime } from "../alphabets/r/rData";
// import { s_anime } from "../alphabets/s/sData";
// import { t_anime } from "../alphabets/t/tData";
// import { u_anime } from "../alphabets/u/uData";
// import { v_anime } from "../alphabets/v/vData";
// import { w_anime } from "../alphabets/w/wData";
// import { x_anime } from "../alphabets/x/xData";
// import { y_anime } from "../alphabets/y/yData";
// import { z_anime } from "../alphabets/z/zData";
// import { Anime } from "@/lib/class/Anime";

// const animes: Anime[][] = [
//   a_anime,
//   b_anime,
//   c_anime,
//   d_anime,
//   e_anime,
//   f_anime,
//   g_anime,
//   h_anime,
//   i_anime,
//   j_anime,
//   k_anime,
//   l_anime,
//   m_anime,
//   n_anime,
//   o_anime,
//   p_anime,
//   q_anime,
//   r_anime,
//   s_anime,
//   t_anime,
//   u_anime,
//   v_anime,
//   w_anime,
//   x_anime,
//   y_anime,
//   z_anime
// ];

// const flat_animes = animes.flat();

// export const getAllAnimes = () => {
//   return animes
// }

// export const getAnimes = (genre: string[], theme: string[], rating: string[]): Anime[][] => {
//   return genre.length === 0 && theme.length === 0 && rating.length == 0 ? animes : getFilteredAnime(genre, theme, rating);
// };

// export const getAnime = (name: string): Anime | undefined => {
//   const alphabetSection = name.charAt(0).toLowerCase().charCodeAt(0);
//   const index = alphabetSection - 97;

//   for (let i = 0; i < animes[index].length; i++) {
//     if (animes[index][i].engTitle === name || animes[index][i].japTitle === name) {
//       return animes[index][i];
//     }
//   }
// };

// export const getJapaneseTitle = (genre: string[], theme: string[], rating: string[]): Anime[][] => {
//     const sortedAnime = new Array(26);

//     for (let i = 0; i < sortedAnime.length; i++) {
//       sortedAnime[i] = [];
//     }

//     const lowerCaseA = "a".charCodeAt(0);
//     const upperCaseA = "A".charCodeAt(0);
//     for (let i = 0; i < flat_animes.length; i++) {
//       flat_animes[i].japTitle = flat_animes[i].japTitle === "" ? flat_animes[i].engTitle : flat_animes[i].japTitle;
//       const firstCharASCII = flat_animes[i].japTitle.charCodeAt(0);

//       const index =
//         firstCharASCII - lowerCaseA > 0
//           ? firstCharASCII - lowerCaseA
//           : firstCharASCII - upperCaseA;
//       sortedAnime[index].push(flat_animes[i]);
//     }
//     return genre.length === 0 && theme.length === 0 ? sortedAnime : getFilteredAnime(genre, theme, rating);
// }

// export const getGenres = (): string[] => {
//   const genres: string[] = [];

//   for (const anime of flat_animes) {
//     for (const genre of anime.genres) {
//       if (!genres.includes(genre)) {
//         genres.push(genre);
//       }
//     }
//   }
//   genres.sort();
//   return genres;
// }

// export const getThemes = (): string[] => {
//   const themes: string[] = [];

//   for (const anime of flat_animes) {
//     for (const theme of anime.themes) {
//       if (!themes.includes(theme) && theme !== "") {
//         themes.push(theme);
//       }
//     }
//   }
//   themes.sort();
//   return themes;
// }

// export const getRatings = (): string[] => {
//   const ratings: string[] = [];

//   for (const anime of flat_animes) {
//     if (!ratings.includes(anime.rating)) {
//       ratings.push(anime.rating);
//     }
//   }
//   ratings.sort()
//   return ratings;
// }

// const getFilteredAnime = (genre: string[], theme: string[], rating: string[]): Anime[][] => {
//   return [flat_animes.filter(anime => 
//     (genre.length === 0 || genre.every(r => anime.genres.includes(r))) && 
//     (theme.length === 0 || theme.every(r => anime.themes.includes(r))) &&
//     (rating.length === 0 || rating.every(r => anime.rating.includes(r)))
//   )];
// }