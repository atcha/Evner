
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'infos', component: () => import('pages/Infos.vue') },
      { path: 'program', component: () => import('pages/Program.vue') },
      { path: 'speakers', component: () => import('pages/Speakers.vue') },
      { path: 'about', component: () => import('pages/About.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
