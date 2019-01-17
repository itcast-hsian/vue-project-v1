<template>
    <div>
        <el-col :span="18">
            <el-form ref="form" :model="form" label-width="90px">
                <el-form-item label="所属父类别">
                    <el-select v-model="form.category_id" placeholder="请选择" @change="handleChange">
                        <el-option-group
                        v-for="group in category_goods"
                        v-if="group.parent_id === 0"
                        :key="group.category_id"
                        :label="group.title">
                        <el-option
                            v-for="item in category_goods"
                            v-if="item.parent_id === group.category_id"
                            :key="item.category_id"
                            :label="item.title"
                            :value="item.category_id">
                        </el-option>
                        </el-option-group>
                    </el-select>
                </el-form-item>

                <el-form-item label="排序数字">
                    <el-col :span="12">
                        <el-input v-model="form.sort_id"></el-input>
                    </el-col>
                    <el-col :span="12">
                        <span class="tips">*栏目排序,排序不能小于( {{sortId}} )</span>
                    </el-col>
                </el-form-item>

                <el-form-item label="类别名称">
                    <el-col :span="12">
                        <el-input v-model="form.title"></el-input>
                    </el-col>
                    <el-col :span="12">
                        <span class="tips">*类别中文名称，100字符内</span>
                    </el-col>
                </el-form-item>

                <el-form-item label="类别级别">
                    <el-col :span="12">
                        <el-input v-model="form.class_layer"></el-input>
                    </el-col>
                    <el-col :span="12">
                        <span class="tips">类别的级别，1:1级菜单 2：二级菜单 依次类推</span>
                    </el-col>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>

<script>
export default {
    data() {
      return {
        category_goods: [],

        form: {
            category_id: "",
            sort_id: "",
            title:"",
            class_layer: ""
        },
        sortId: 0
      }
    },
    mounted(){
        // 获取分类数据
        this.$axios({
            url: "/admin/category/getlist/goods",
        }).then(res => {
            const {message} = res.data;
            this.category_goods = message;
        })
    },
    methods: {
        handleChange(val){
            const selected = this.category_goods.filter(v => {
                return v.category_id == val;
            })[0];

            console.log(selected)

            this.sortId = selected.sort_id;
        },
        onSubmit() {
            this.$axios({
                url: `/admin/category/add/goods`,
                method: "POST",
                data: this.form,
                withCredentials: true
            }).then(res => {
                const {message} = res.data;
                this.$message({
                    message,
                    type: 'success'
                });
                setTimeout(() => {
                    this.$router.back();
                }, 1000)
            })
        },
    },
}
</script>

<style scoped lang="scss">
    .tips{
        font-size: 12px;
        color:#999;
        vertical-align: middle;
        margin:0 10px;
    }
</style>
