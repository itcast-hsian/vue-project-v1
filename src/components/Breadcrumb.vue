<template>
    <div class="breadcrumb">
        <el-breadcrumb  separator-class="el-icon-arrow-right">
            <el-breadcrumb-item 
            v-for="(item, index) in dataSource" 
            :key="index"
            :to="{ path: item.path }">
                {{item.name}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props: {
        dataSource: {
            type: Array,
            default: []
        }
    }
    
}
</script>

<style scoped lang="scss">
    .breadcrumb{
        display: flex;
        padding:10px 0 15px;
        border-bottom: 1px #ccc solid;
        margin-bottom:20px;
        flex-shrink: 0;
    }
</style>
