
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/cadastro',
    component: () => import('../layouts/Cadastro.vue'),
    children: [
      {
        path: '/cadastro/aluno',
        component: () => import('../components/cadastro/CadastroAluno.vue')
      },
        {
        path: '/cadastro/professor',
        component: () => import('../components/cadastro/CadastroProfessor.vue')
      },
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