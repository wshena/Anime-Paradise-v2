/* eslint-disable no-undef */
import axios from "axios";

export const AnimeThisSeason = async () => {
  try {
    const respones = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/seasons/now`);
    return respones.data
  } catch (error) {
    console.log(error)
  }
}

export const GetTopAnime = async () => {
  try {
    const respones = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/top/anime`);
    return respones.data
  } catch (error) {
    console.log(error)
  }
}

export const GetTopManga = async () => {
  try {
    const respones = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/top/manga`);
    return respones.data
  } catch (error) {
    console.log(error)
  }
}