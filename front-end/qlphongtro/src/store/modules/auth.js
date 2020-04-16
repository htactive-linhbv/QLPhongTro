import axios from 'axios'
export default ({
    state: {
        token: localStorage.getItem('chutro-token') || null,
        chuTroProfile:{
            _id : localStorage.getItem('chutro-profile-id'),
            hoVaTen:localStorage.getItem('chutro-profile-name')
        } || {},
        trangThaiLogin: false,
    },
    mutations: {
        LOGIN_FAILURE(state) {
            state.trangThaiLogin = false;
        },
        LOGIN_SUCCESS(state, result) {
            state.token = result.token;
            state.chuTroProfile = result.chutro;
            state.trangThaiLogin = true
        },
        LOGOUT: (state) => {
            state.token = "";
            state.trangThaiLogin = false;
            state.chuTroProfile = {};

        },
    },

    actions: {
        LOGIN({ commit }, data) {
            console.log(data);

            return new Promise((resolve, reject) => {
                axios.post('login/chutro', {
                    email: data.email,
                    password: data.password
                }).then(response => {
                    commit('LOGIN_SUCCESS', response.data);
                    localStorage.setItem("chutro-token", response.data.token);
                    localStorage.setItem("chutro-profile-name", response.data.chutro.hoVaTen);
                    localStorage.setItem("chutro-profile-id", response.data.chutro._id);
                    axios.defaults.headers.common['Authorization'] = "Bearer " + response.data.token
                    resolve(response)
                }).catch(err => {

                    commit('LOGIN_FAILURE');
                    reject(err);
                })
            })
        },
        LOGOUT({ commit }) {

            return new Promise((resolve,reject)=>{
                try {
                    commit('LOGOUT');
                    localStorage.removeItem('chutro-token');
                    localStorage.removeItem('chutro-profile-name');
                    localStorage.removeItem('chutro-profile-id');
                    axios.defaults.headers.common['Authorization'] ="";
                    resolve();
                } catch (error) {
                    reject(error);
                }
            })
           
            
        }
    },

})
