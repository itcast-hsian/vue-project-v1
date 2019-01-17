import Index from "./pages/Index.vue";
import Admin from "./pages/Admin.vue";
import Login from "./pages/Login.vue";
import GoodsList from "./pages/goods/GoodsList.vue";
import GoodsAdd from "./pages/goods/GoodsAdd.vue";
import GoodsEdit from "./pages/goods/GoodsEdit.vue";
import CategoryList from "./pages/category/CategoryList.vue";
import CategoryAdd from "./pages/category/CategoryAdd.vue";
import AccountList from "./pages/account/AccountList.vue";
import CommentList from "./pages/comment/CommentList.vue";
import OrderList from "./pages/order/OrderList.vue";
import OrderEdit from "./pages/order/OrderEdit.vue";
import OrderDetail from "./pages/order/OrderDetail.vue";

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
        path: "goods-edit/:id",
        component: GoodsEdit,
        name: "goods-edit",
        meta: "编辑商品",
      },
      {
        path: "account-list",
        component: AccountList,
        name: "account-list",
        meta: "会员列表",
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
      },
      {
        path: "order-list",
        component: OrderList,
        name: "order-list",
        meta: "订单管理",
      },
      {
        path: "order-edit/:id",
        component: OrderEdit,
        name: "order-edit",
        meta: "编辑订单",
      },
      {
        path: "order-detail/:id",
        component: OrderDetail,
        name: "order-detail",
        meta: "订单详情",
      }
    ]
  }
]

export default routes;