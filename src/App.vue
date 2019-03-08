<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
    }
  },
  mounted(){
    this.$axios({
      url: "/admin/account/islogin",
      withCredentials: true
    }).then((res) => {
      
      if(res.data.code == "nologin" || localStorage.getItem("username")){
        const path = this.$route.path;
        if(path.indexOf("/login") > -1) return;

        this.$router.push({path: `/login?returnUrl=${path}`})
      }
    })
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
} 

a{
  text-decoration: none;
  color:#333;
}
</style>
