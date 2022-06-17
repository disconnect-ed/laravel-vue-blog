// import axios from "axios";
// import router from "./router";
//
// const instance = axios.create();
// instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// instance.defaults.withCredentials = true;
// instance.interceptors.response.use({}, err => {
//     if (err.response.status == 401 || err.response.status == 419) {
//         const token = localStorage.getItem('x-xsrf-token')
//         if (token) {
//             localStorage.removeItem('x-xsrf-token')
//         }
//         router.push({name: 'login'})
//     }
// })
//
// export const api = {
//     async getCsrf() {
//         return await instance.get('/sanctum/csrf-cookie')
//     },
//     async login(email, password) {
//         await this.getCsrf()
//         return  await instance.post('/login', {email, password})
//     },
//     async getProfile() {
//         return await instance.get('/api/user')
//     }
// }




