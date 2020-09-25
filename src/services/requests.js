import request from "./request";

export function Posts() {
  return request(`https://aguaviva-rp.firebaseio.com/valor.json`)
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}
export function Filtrar(filtro) {
  return request(`https://jsonplaceholder.typicode.com/posts?userId=${filtro}`)
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}
export function Remover() {
  return request(`https://aguaviva-rp.firebaseio.com/valor.json`, {
    outro: eeeee,
  })
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}
