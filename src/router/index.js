import Vue from 'vue'
import Router from 'vue-router'
// noinspection NpmUsedModulesInstalled
import home from '@/components/Home'
// noinspection NpmUsedModulesInstalled
import settings from '@/components/Settings'

// noinspection JSUnresolvedFunction
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings
    }
  ]
})
