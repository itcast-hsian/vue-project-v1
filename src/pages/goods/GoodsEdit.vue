<template>
    <div>
        <el-col :span="18">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="所属类别">
                    <el-select v-model="form.category_id" placeholder="请选择">
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

                <el-form-item label="是否发布">
                    <el-switch v-model="form.status"></el-switch>
                    <span class="tips">*不发布前台则无法显示</span>
                </el-form-item>

                <el-form-item label="推荐类型">
                    <el-checkbox label="置顶" v-model="form.is_top"></el-checkbox>
                    <el-checkbox label="热门" v-model="form.is_hot"></el-checkbox>
                </el-form-item>

                <el-form-item label="内容标题">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>

                <el-form-item label="副标题">
                    <el-input v-model="form.sub_title"></el-input>
                </el-form-item>

                <el-form-item label="封面图片">
                    <el-upload
                    class="avatar-uploader"
                    action="http://127.0.0.1:8899/admin/article/uploadimg"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>

                <el-form-item label="商品货号">
                    <el-col :span="12">
                        <el-input v-model="form.goods_no"></el-input>
                    </el-col>
                </el-form-item>

                <el-form-item label="库存数量">
                    <el-col :span="12">
                        <el-input v-model="form.stock_quantity"></el-input>
                    </el-col>
                    <el-col :span="12">
                        <span class="tips">*我不确定要不要自动生成</span>
                    </el-col>
                </el-form-item>

                <el-form-item label="市场价格">
                    <el-col :span="12">
                        <el-input v-model="form.market_price"></el-input>
                    </el-col>
                </el-form-item>

                <el-form-item label="销售价格">
                    <el-col :span="12">
                        <el-input v-model="form.sell_price"></el-input>
                    </el-col>
                </el-form-item>

                <el-form-item label="图片相册">
                    <el-upload
                    action="http://127.0.0.1:8899/admin/article/uploadimg"
                    list-type="picture-card"
                    :file-list="form.fileList"
                    multiple
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :on-success="handleMultSuccess"
                    :limit="5">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>

                <el-form-item label="内容摘要">
                    <el-input type="textarea" v-model="form.zhaiyao"></el-input>
                </el-form-item>

                <el-form-item label="内容描述" class="editor">
                    <quillEditor v-model="form.content"/>
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
        id: 0,
        category_goods: [],
        form: {
          title: '',
          sub_title: '',
          goods_no: '',
          category_id: '',
          stock_quantity: "",
          market_price: "",
          sell_price: "",
          status: false,
          is_slide: false,
          is_top: false,
          is_hot: false,
          zhaiyao: "",
          content: "",
          imgList: [],
          fileList: []
        },

        imageUrl: '',

        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      onSubmit() {
        this.$axios({
            //url: "/admin/goods/add/goods",
            url: `admin/goods/edit/${this.id}`,
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
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.form.imgList = [res];
      },
      beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isLt2M;
      },
      handleRemove(file, fileList) {
        this.form.fileList = this.form.fileList.filter(v => {
            return file.name !== v.name
        });
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleMultSuccess(res, file, fileList){
        this.form.fileList.push(res);
      }
    },
    
    components: {
        quillEditor
    },

    mounted(){
        const id = this.$route.params.id;
        this.id = id;
        this.$axios({
            url: `/admin/goods/getgoodsmodel/${id}`,
        }).then(res => {
            const {message} = res.data;
            this.form = {
                ...this.form,
                ...message,
                fileList: message.fileList.map(v => {
                    return {
                        ...v,
                        url: "http://127.0.0.1:8899" + v.shorturl
                    }
                })
            };

            this.imageUrl =  message.imgList[0].url;
        })

        // 获取分类数据
        this.$axios({
            url: "/admin/category/getlist/goods",
        }).then(res => {
            const {message} = res.data;
            this.category_goods = message;
        })
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
