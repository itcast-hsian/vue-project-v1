<template>
    <div class="login-form">
        <el-form label-position="right" label-width="45px" :model="formLabelAlign">
            <el-form-item>
                <div class="login-title">登录</div>
            </el-form-item>
            <el-form-item label="账号">
                <el-input v-model="formLabelAlign.uname"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="formLabelAlign.upwd"></el-input>
            </el-form-item>
            <el-form-item>
                <div class="login-title">
                    <el-button type="primary" @click="submitForm">提交</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
const axios = require('axios');
axios.defaults.baseURL = "http://127.0.0.1:8899"

export default {
    data() {
      return {
        formLabelAlign: {
          uname: '',
          upwd: ''
        }
      };
    },

    methods: {
        submitForm(){
            const returnUrl= this.$route.query.returnUrl || "/";
            axios({
                url:"/admin/account/login",
                method: "POST",
                data: this.formLabelAlign,
                withCredentials: true,
            }).then(res => {
                this.$router.push(returnUrl)
            })
        },

        resetForm(){

        }
    }
}
</script>

<style scoped lang="scss">
    .login-form{
        width:400px;
        position: absolute;
        left:50%;
        top:50%;
        margin:-200px 0 0 -225px;
    }
    .login-title{
        text-align: center;
        color:#409EFF;
        font-size:16px;
    }
</style>
