import { UserConfigExport, ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport from 'vite-plugin-style-import'
import { svgBuilder } from './src/plugins/svgBuilder'
import { viteMockServe } from 'vite-plugin-mock'

const resolve = (dir: string) => path.join(__dirname, dir);
const ip = Object.values(require('os').networkInterfaces())
  .reduce((s, v) => s.concat(v), [])
  .find(e => e.family === 'IPv4' && !e.internal).address;

// 环境变量 https://blog.csdn.net/chendf__/article/details/115676683
// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		[svgBuilder('./src/assets/icons/svg/')], // 这里已经将src/icons/svg/下的svg全部导入，无需再单独导入],
		styleImport({
			libs: [
				{
					libraryName: 'element-plus',
					esModule: true,
					ensureStyleFile: true,
					resolveStyle: name => {
						name = name.slice(3)
						return `element-plus/packages/theme-chalk/src/${name}.scss`
					},
					resolveComponent: name => {
						return `element-plus/lib/${name}`
					}
				}
			]
		})
	],
	resolve: {
		alias: {
			'@': resolve('src'),
			comps: resolve('src/components'),
			apis: resolve('src/apis'),
			views: resolve('src/views'),
			utils: resolve('src/utils'),
			store: resolve('src/store'),
			routes: resolve('src/routes'),
			styles: resolve('src/styles')
		}
	},
	server: {
		//服务器主机名
		host: ip,
		//端口号
		port: 3088,
		//设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
		strictPort: false,
		//服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
		open: true,
		//自定义代理规则
		proxy: {
			// 选项写法
			'/api': {
				target: 'http://jsonplaceholder.typicode.com',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, '')
			}
		}
	}
})

// export default ({ command }: ConfigEnv): UserConfigExport => {
// 	return {
// 	  plugins: [
// 		vue(),
// 		viteMockServe({
// 		  // default
// 		  mockPath: 'mock',
// 		  localEnabled: command === 'serve',
// 		}),
// 	  ],
// 	}
//   }