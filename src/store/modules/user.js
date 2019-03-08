import axios from "axios";

export default {
    namespaced: true,

    state: {
        username: localStorage.getItem('username') || "",
        identity: localStorage.getItem('identity') || ""
    },

    mutations: {
        setLocalStorage(state, value){
            state.username = value.uname
            state.identity = value.realname
            localStorage.setItem("username", value.uname);
            localStorage.setItem("identity", value.realname);
        },

        removeLocalStorage(){
            localStorage.removeItem("username");
            localStorage.removeItem("identity");
        }
    },

    actions: {

        login({commit, state}, data){
            new Promise((resolve, reject) => {
                axios({
                    method: "POST",
                    url:"/admin/account/login",
                    data,
                    withCredentials: true,
                }).then(res => {
                    const {message, status} = res.data;
                    if(status == 0){
                        commit("setLocalStorage", message);
                        resolve(message);
                    }
                    reject();
                })
            })
        },

        logout({commit}){
            new Promise((resolve, reject) => {
                axios({
                    method: "get",
                    url:"/admin/account/logout",
                    withCredentials: true,
                }).then(res => {
                    const {message, status} = res.data;
                    if(status == 0){
                        commit("removeLocalStorage");
                        resolve(message);
                    }
                    reject();
                })
            })
        }
    }
}