/*
 * @Descripttion:
 * @version:
 * @Author: wonder.d.wang
 * @Date: 2021-04-29 15:13:00
 * @LastEditors: wonder.d.wang
 */
import Home from "../pages/Home";
import Store from "../pages/Store";
import Msg from "../pages/Msg";
import Mine from "../pages/Mine";
const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/Store",
    component: Store,
    meta: {
      title: "商城",
    },
  },
  {
    path: "/Msg",
    component: Msg,
    meta: {
      title: "消息",
    },
  },
  {
    path: "/Mine",
    component: Mine,
    meta: {
      title: "我的",
    },
  },
];
export default routes