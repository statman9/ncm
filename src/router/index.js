import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:id',
      name: 'Content',
      component: Content,
      props: true
    }, {
      path: '/',
      redirect: '/home'
    }
  ]
})
