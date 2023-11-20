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

export const GetSeasonList = async () => {
  try {
    const respones = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/seasons`);
    return respones.data
  } catch (error) {
    console.log(error);
  }
}

export const GetAnimeSeason = async (year, season, page) => {
  try {
    const respones = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/seasons/${year}/${season}?page=${page}`);
    return respones.data
  } catch (error) {
    console.log(error);
  }
}

export const GetAnimeSearch = async (title, page) => {
  try {
    const respone = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/anime?q=${title}&page=${page}`);
    return respone.data
  } catch (error) {
    console.log(error)
  }
}

export const GetMangaSearch = async (title, page) => {
  try {
    const respone = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/manga?q=${title}&page=${page}`);
    return respone.data
  } catch (error) {
    console.log(error)
  }
}

export const GetAnimeFullById = async (id) => {
  try {
    const respone = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/anime/${id}/full`);
    return respone.data.data
  } catch (error) {
    console.log(error)
  }
}

export const GetMangaFullById = async (id) => {
  try {
    const respone = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/manga/${id}/full`);
    return respone.data.data
  } catch (error) {
    console.log(error)
  }
}

export const GetAnimeMoreLikeThis = async (id) => {
  try {
    const respone = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/anime/${id}/recommendations`);
    return respone.data.data
  } catch (error) {
    console.log(error)
  }
}

export const GetMangaMoreLikeThis = async (id) => {
  try {
    const respone = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/manga/${id}/recommendations`);
    return respone.data.data
  } catch (error) {
    console.log(error)
  }
}