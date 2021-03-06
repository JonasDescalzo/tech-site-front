
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/addPhone', component: () => import('pages/AddPhone.vue') },
      { path: '/editPhone', component: () => import('pages/EditPhone.vue') },
      { path: '/techBrands', component: () => import('pages/Brands.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
