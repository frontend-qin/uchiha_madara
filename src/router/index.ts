import {
  createRouter,
  createWebHashHistory,
  RouteMeta,
  RouteRecordRaw,
} from "vue-router";
import { daymicRouter } from "./generator";

// 静态路由
const staticRouter: Array<RouteRecordRaw> = [];

// 动态路由 + 静态
const routes = [...staticRouter, ...daymicRouter];

// 实例化
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
