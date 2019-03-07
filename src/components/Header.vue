<template>
    <div class="header">
        <div class="toggle-btn" @click="handleToggle">
            <i class="el-icon-back"></i>
        </div>

        <div class="profile" v-if="username">
            <i class="el-icon-picture"></i>
            <span>{{username}} {{identity}}</span>
            <a href="javascript:void(0)" @click="handleLogout">退出</a>
        </div>

        <div class="profile" v-else>
            <router-link to="/login">登录</router-link>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {

    computed: {
        ...mapState('user',{
            username: 'username',
            identity: "identity"
        })
    },

    methods: {
        handleToggle(){
            this.$emit("toggle")
        },

        handleLogout(){
            this.$store.dispatch("user/logout").then(res => {
                this.$router.push("/login");
            })
        }
    }
}
</script>

<style scoped lang="scss">
    .header{
        display: flex;
        justify-content: space-between;
    }

    .toggle-btn{
        display: inline-block;
        height:100%;
        padding:0 20px;
        cursor:pointer;
    }
    .profile{
        padding:0 20px;
    }
</style>
