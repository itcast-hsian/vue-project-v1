<template>
    <div class="header">
        <div class="toggle-btn" @click="handleToggle">
            <i class="el-icon-back"></i>
        </div>

        <div class="profile">
            <i class="el-icon-picture"></i>
            <span>admin</span>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleToggle(){
            this.$emit("toggle")
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
