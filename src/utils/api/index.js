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

export const GetTopAnime = async (limit) => {
  try {
    const respones = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/top/anime?limit=${limit}`);
    return respones.data
  } catch (error) {
    console.log(error)
  }
}

export const GetTopManga = async (limit) => {
  try {
    const respones = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/top/manga?limit=${limit}`);
    return respones.data
  } catch (error) {
    console.log(error)
  }
}