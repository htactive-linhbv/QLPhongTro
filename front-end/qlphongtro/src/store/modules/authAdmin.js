// thiet ke
// lop ni la ko quan tam tới bên dưới của api
// chỉ dùng tính năng của api(high level)
// api.login(email, password) -> luu vo sessoin
// api.get("/product") -> tư động get token -> xử lý nếu ko có token hoặc token hết hạn
// api.post("/user")
// localpersitence ->
// id
//import api from './lib/api'
import axios from 'axios'
export default ({
    state: {
        token: localStorage.getItem('admin-token') || null,
        trangThaiLogin: false,
    },
    mutations: {
        LOGIN_FAILURE(state) {
            state.trangThaiLogin = false;
        },
        LOGIN_SUCCESS(state, result) {
            state.token = result.token;
            state.trangThaiLogin = true
        },
        LOGOUT: (state) => {
            state.token = "";
            state.trangThaiLogin = false;
           

        },
    },

    actions: {
        ADMINLOGIN({ commit }, data) {
            return new Promise((resolve, reject) => {
                axios.post('login/admin', {
                    email: data.email,
                    password: data.password
                }).then(response => {
                    commit('LOGIN_SUCCESS', response.data);
                    localStorage.setItem("admin-token", response.data.token);
                    axios.defaults.headers.common['authorization-admin'] = `Bearer ${response.data.token}`
                    resolve(response)
                }).catch(err => {

                    commit('LOGIN_FAILURE');
                    reject(err);
                })
            })
        },
        ADMINLOGOUT({ commit }) {

            return new Promise((resolve, reject) => {
                try {
                    commit('LOGOUT');
                    localStorage.removeItem('admin-token');
                   
                    axios.defaults.headers.common['authorization-admin'] = "";
                    resolve();
                } catch (error) {
                    reject(error);
                }
            })


        }
    },
})
