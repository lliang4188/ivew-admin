import Main from '@/components/main'

export default [
  // 菜单分三种情况
  // 链接式跳转 -> doc
  // 内嵌的子页面 -> Main Layout -> children
  // 一级菜单上添加路由 （hideInMenu, hideInBread）

  // 内容管理
  // 1.文章管理 -> 文章内容管理，文章标签管理（热门、精华、etc）
  {
    path: '/content',
    name: 'article_management',
    meta: {
      icon: 'md-albums',
      title: '文章管理',
      notCache: true
    },
    component: Main,
    children: [
      {
        path: 'index',
        name: 'content_management',
        meta: {
          icon: 'md-grid',
          title: '内容管理',
          notCache: true
        },
        component: () => import('@/view/content/index.vue')
      },
      {
        path: 'tags',
        name: 'tags_management',
        meta: {
          icon: 'md-pricetags',
          title: '标签管理',
          notCache: true
        },
        component: () => import('@/view/content/tags.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      icon: 'ios-people',
      title: '用户管理',
      notCache: true
    },
    component: Main,
    children: [
      {
        path: 'index',
        name: 'user_management',
        meta: {
          icon: 'ios-people',
          title: '用户管理',
          notCache: true
        },
        component: () => import('@/view/user/index.vue')
      }
    ]
  },
  {
    path: '/menu',
    name: 'menu',
    meta: {
      icon: 'md-settings',
      title: '菜单管理',
      notCache: true
    },
    component: Main,
    children: [
      {
        path: 'index',
        name: 'menu_management',
        meta: {
          icon: 'ios-menu',
          title: '菜单管理',
          notCache: true
        },
        component: () => import('@/view/menu/index.vue')
      }
    ]
  },
  {
    path: '/roles',
    name: 'roles',
    meta: {
      icon: 'md-checkbox',
      title: '权限管理',
      notCache: true
    },
    component: Main,
    children: [
      {
        path: 'index',
        name: 'roles_management',
        meta: {
          icon: 'md-key',
          title: '角色权限',
          notCache: true
        },
        component: () => import('@/view/roles/index.vue')
      }
    ]
  }
]