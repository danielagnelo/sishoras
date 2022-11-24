import axios from "axios";
/* ------------- */
/* Desenvolvimento */
/* ------------- */

//const baseURL = 'http://10.30.152.15:3001/'
/* Existe os caminhos dentro do banco de dados (frv, tipos, users, etc...) */

/* ------------- */
/* Produção */
/* ------------- */

const api = axios.create({
  baseURL: 'http://localhost:3001/'
});
export default api;
