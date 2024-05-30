import axios from "axios";

export const getStarWarsCharacter = async (id: string) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    // console.log("res: ", res);
    return res.data.name;
  } catch (error) {
    console.log(error);
  }
};
