// 权限拦截在路由跳转 导航守卫
import router from '@/router'
import store from '@/store'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  nprogress.start()
  const token = store.getters.token// 获取当前token
  console.log(token)
  if (token) {
    // 如果有token
    if (to.path === '/login') {
      // 如果当前页是登录页，跳回主页
      next('/')
    } else {
      next()
    }
  } else {
    // 没有token，判断地址是否为白名单地址
    if (whiteList.indexOf(to.path) >= 0) {
      next()
    } else {
      next('/login')
    }
  }
  nprogress.done()
})

router.afterEach(() => {
  nprogress.done()
})
