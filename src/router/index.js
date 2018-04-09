import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Work from '@/components/Work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/work',
      redirect: '/'
    },
    {
      path: '/work/:work',
      component: Work,
      props: true
    }
  ]
})
