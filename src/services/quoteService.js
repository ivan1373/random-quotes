import axios from "axios";

const API = 'https://type.fit/api/quotes'

export const getAll = () => {
  return axios
    .get(API)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error);
    });
};

export const getItem = array => {
  const length = array.length
  return array[Math.floor(Math.random() * length)]
};

