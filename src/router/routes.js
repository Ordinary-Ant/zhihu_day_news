import { lazy } from "react";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: lazy(() => import("../pages/Detail/index")),
    meta: {
      title: "详情",
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: lazy(() => import("../pages/Profile/index")),
    meta: {
      title: "个人中心",
    },
  },
  {
    path: "/collect",
    name: "collect",
    component: lazy(() => import("../pages/Collect/index")),
    meta: {
      title: "我的收藏",
    },
  },
  // {
  //   path: "/update",
  //   name: "update",
  //   component: lazy(() => import("../pages/Update")),
  //   meta: {
  //     title: "修改个人信息",
  //   },
  // },
  {
    path: "/login",
    name: "login",
    component: lazy(() => import("../pages/Login/index")),
    meta: {
      title: "登录/注册",
    },
  },
  {
    path: "*",
    name: "404",
    component: lazy(() => import("../pages/Error/index")),
    meta: {
      title: "404",
    },
  },
];
export default routes;
