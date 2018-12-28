import Index from "./pages/Index.vue";
import Admin from "./pages/Admin.vue";
import Login from "./pages/Login.vue";
import GoodsList from "./pages/goods/GoodsList.vue";
import GoodsAdd from "./pages/goods/GoodsAdd.vue";
import CategoryList from "./pages/category/CategoryList.vue";
import CategoryAdd from "./pages/category/CategoryAdd.vue";
import CommentList from "./pages/comment/CommentList.vue";

const routes = [
  {
    path: "/",
    redirect: "/admin",
    name: "index"
  }, {
    path: "/login",
    component: Login,
    name: "login"
  }, {
    path: "/admin",
    component: Admin,
    redirect: "/admin/goods-list",
    name: "admin",
    meta: "管理后台",
    children: [
      {
        path: "goods-list",
        component: GoodsList,
        name: "goods-list",
        meta: "商品管理",
      },
      {
        path: "goods-add",
        component: GoodsAdd,
        name: "goods-add",
        meta: "添加商品",
      },
      {
        path: "category-list",
        component: CategoryList,
        name: "category-list",
        meta: "栏目管理",
      },
      {
        path: "category-add",
        component: CategoryAdd,
        name: "category-add",
        meta: "新增栏目",
      },
      {
        path: "comment-list",
        component: CommentList,
        name: "comment-list",
        meta: "评论管理",
      }
    ]
  }
]

export default routes;