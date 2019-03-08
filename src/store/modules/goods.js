
import axios from "axios";

export default {
    namespaced: true,
    
    state: {
        goodsList: [],
    },

    mutations: {
        setGoods(state, value){
            state.goodsList = value;
        },
    },

    actions: {
        getGoods({commit, state}, params){

            return new Promise((resolve, reject) => {
                axios({
                    method: "get",
                    url: "/admin/goods/getlist",
                    params: {
                        ...params
                    }
                }).then(res => {
                    commit("setGoods", res.data.message);
                    resolve(res.data)
                })
            })
            
        }
    }
}