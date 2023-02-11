import axios from "axios";
 export async function getPersojes() {
   const res = await fetch("https://swapi.dev/api/people/");
   const data = await res.json();
   return data;
 }

 export async function getSelecPersonaje(id) {
   const res = await fetch("https://swapi.dev/api/" + id + "/");
   const data = await res.json();
   return data;
 }

 export async function getBusqueda(name) {
   const res = await fetch("https://swapi.dev/api/people/?search=" + name);
   const data = await res.json();
   return data;
 }


export async function getAxios(ite,id) {
  
  try {
    const dat = await axios.get(`https://swapi.dev/api/${ite}/${id}`);
    console.log("ser",id,ite)
     return dat.data;
  } catch (error) {
   return "error"
   
  }
}
