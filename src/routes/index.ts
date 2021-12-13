import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'

const routerHistory = createWebHistory()
const Layout = () => import('@/layout/index.vue')
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由

//创建路由实例并传递
const router = createRouter({
	history: routerHistory,
	routes: [
		{
			path: '/',
			component: Layout,
			children: [
				{
				  path: '/home',
				  component: ()=>import('views/home/index.vue'),
				}
			  ]
		}
	]
})

// 删除/重置路由
export function resetRoute(): void {
    //getRoutes 获取所有 路由记录的完整列表。
	router.getRoutes().forEach(route => {
		const { name } = route
		if (name) {
            // hasRoute 确认是否存在指定名称的路由。
            // removeRoute(name: string | symbol): void 通过名称删除现有路由。
			router.hasRoute(name) && router.removeRoute(name)
		}
	})
}

export function setupRouter(app: App<Element>) {
	app.use(router)
}
export default router
