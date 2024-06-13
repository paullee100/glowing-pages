import { a_anime } from "./alphabets/a/aData";
import { b_anime } from "./alphabets/b/bData";
import { c_anime } from "./alphabets/c/cData";
import { d_anime } from "./alphabets/d/dData";
import { e_anime } from "./alphabets/e/eData";
import { f_anime } from "./alphabets/f/fData";
import { g_anime } from "./alphabets/g/gData";
import { h_anime } from "./alphabets/h/hData";
import { i_anime } from "./alphabets/i/iData";
import { j_anime } from "./alphabets/j/jData";
import { k_anime } from "./alphabets/k/kData";
import { l_anime } from "./alphabets/l/lData";
import { m_anime } from "./alphabets/m/mData";
import { n_anime } from "./alphabets/n/nData";
import { o_anime } from "./alphabets/o/oData";
import { p_anime } from "./alphabets/p/pData";
import { q_anime } from "./alphabets/q/qData";
import { r_anime } from "./alphabets/r/rData";
import { s_anime } from "./alphabets/s/sData";
import { t_anime } from "./alphabets/t/tData";
import { u_anime } from "./alphabets/u/uData";
import { v_anime } from "./alphabets/v/vData";
import { w_anime } from "./alphabets/w/wData";
import { x_anime } from "./alphabets/x/xData";
import { y_anime } from "./alphabets/y/yData";
import { z_anime } from "./alphabets/z/zData";

const animes = [
  a_anime,
  b_anime,
  c_anime,
  d_anime,
  e_anime,
  f_anime,
  g_anime,
  h_anime,
  i_anime,
  j_anime,
  k_anime,
  l_anime,
  m_anime,
  n_anime,
  o_anime,
  p_anime,
  q_anime,
  r_anime,
  s_anime,
  t_anime,
  u_anime,
  v_anime,
  w_anime,
  x_anime,
  y_anime,
  z_anime
];

export const getAnimes = () => {
  return animes;
};

export const getAnime = (name: string) => {
  const alphabetSection = name.charAt(0).toLowerCase().charCodeAt(0);
  const index = alphabetSection - 97;

  for (let i = 0; i < animes[index].length; i++) {
    if (animes[index][i].engTitle === name || animes[index][i].japTitle === name) {
      return animes[index][i];
    }
  }
};