import Index from "./pages/Index.vue";
import Admin from "./pages/Admin.vue";
import Login from "./pages/Login.vue";
import GoodsList from "./pages/goods/GoodsList.vue";
import GoodsAdd from "./pages/goods/GoodsAdd.vue";
import CategoryList from "./pages/category/CategoryList.vue";

const routes = [
    {
      path: "/",
      redirect: "/admin",
      name: "index"
    },{
        path: "/login",
        component: Login,
        name: "login"
    }, {
      path: "/admin",
      component: Admin,
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
          }
      ]
    }
]

export default routes;