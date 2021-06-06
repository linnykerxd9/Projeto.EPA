
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    {
      path:'perguntasFrequentes',component: () => import('pages/perguntasFrequentes')
    }
    ]
  },
  {
    path: '/cadastro',
    component: () => import('../layouts/Cadastro.vue'),
    children: [
      {
        path: 'aluno',
        component: () => import('../components/cadastro/CadastroAluno.vue')
      },
        {
        path: 'professor',
        component: () => import('../components/cadastro/CadastroProfessor.vue')
      },
    ]
  },
  {
    path: '/user=:id',
    component: () => import('../layouts/logadoLayout.vue'),
    children: [
      {
        path: 'mapa',
        component: () => import('../pages/EpaMapa.vue')
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
