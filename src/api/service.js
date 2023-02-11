import axios from "axios";
 

export async function getAxios(ite,id) {
  
  try {
    const dat = await axios.get(`https://swapi.dev/api/${ite}/${id}`);
    console.log("ser",id,ite)
     return dat.data;
  } catch (error) {
   return "error"
   
  }
}
