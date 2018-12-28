<template>
    <div>
        <el-col :span="18">
            <el-form ref="form" :model="form" label-width="90px">
                <el-form-item label="所属父类别">
                    <el-select v-model="value7" placeholder="请选择">
                        <el-option-group
                        v-for="group in options3"
                        :key="group.label"
                        :label="group.label">
                        <el-option
                            v-for="item in group.options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                        </el-option-group>
                    </el-select>
                </el-form-item>

                <el-form-item label="排序数字">
                    <el-col :span="12">
                        <el-input v-model="form.name"></el-input>
                    </el-col>
                    <el-col :span="12">
                        <span class="tips">*栏目排序</span>
                    </el-col>
                </el-form-item>

                <el-form-item label="类别名称">
                    <el-col :span="12">
                        <el-input v-model="form.name"></el-input>
                    </el-col>
                    <el-col :span="12">
                        <span class="tips">*类别中文名称，100字符内</span>
                    </el-col>
                </el-form-item>

                <el-form-item label="调用别名">
                    <el-col :span="12">
                        <el-input v-model="form.name"></el-input>
                    </el-col>
                    <el-col :span="12">
                        <span class="tips">类别的调用别名，只允许字母、数字、下划线</span>
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
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }]
        }],
        value7: '',

        form: {
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
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
