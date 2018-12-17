<template>
    <div>
        <el-col :span="18">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="所属类别">
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

                <el-form-item label="是否发布">
                    <el-switch v-model="form.delivery"></el-switch>
                    <span class="tips">*不发布前台则无法显示</span>
                </el-form-item>

                <el-form-item label="推荐类型">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="置顶" name="type"></el-checkbox>
                        <el-checkbox label="热门" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>

                <el-form-item label="内容标题">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="副标题">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="封面图片">
                    <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>

                <el-form-item label="商品货号">
                    <el-col :span="12">
                        <el-input v-model="form.name"></el-input>
                    </el-col>
                </el-form-item>

                <el-form-item label="库存数量">
                    <el-col :span="12">
                        <el-input v-model="form.name"></el-input>
                    </el-col>
                    <el-col :span="12">
                        <span class="tips">*我不确定要不要自动生成</span>
                    </el-col>
                </el-form-item>

                <el-form-item label="市场价格">
                    <el-col :span="12">
                        <el-input v-model="form.name"></el-input>
                    </el-col>
                </el-form-item>

                <el-form-item label="销售价格">
                    <el-col :span="12">
                        <el-input v-model="form.name"></el-input>
                    </el-col>
                </el-form-item>

                <el-form-item label="图片相册">
                    <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>

                <el-form-item label="内容摘要">
                    
                    <el-input type="textarea" v-model="form.name"></el-input>
                    
                </el-form-item>

                <el-form-item label="内容描述" class="editor">
                    <quillEditor/>
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
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

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
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },

        imageUrl: '',

        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isLt2M;
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },
    
    components: {
        quillEditor
    }
}
</script>

<style scoped lang="scss">
    .tips{
        font-size: 12px;
        color:#999;
        vertical-align: middle;
        margin:0 10px;
    }

    .avatar-uploader /deep/ .el-upload {
        border: 1px dashed #ccc;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader /deep/ .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 148px;
        height: 148px;
        line-height: 148px;
        text-align: center;
    }
    .avatar {
        width: 148px;
        height: 148px;
        display: block;
    }

    .editor /deep/ .el-form-item__content{
        line-height: unset;
    }
</style>
