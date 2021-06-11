
const routes = [

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    {
      path:'perguntasFrequentes',component: () => import('pages/perguntasFrequentes')
    }
  ]},
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
    },
    {
      path: "meus-dados",
      component: () => import('../pages/EpaMeus-dados.vue')
    },
    {
      path: "minhas-materias",
      component: () => import('../pages/minhas-materias.vue')
    },
    {
<<<<<<< HEAD
      path: "perfil",
      component: () => import('../pages/perfil.vue')
    },

    ]
      },

   
=======
      path: "chat",
      component: () => import('../pages/chat.vue')
    },
    {
      path:"localizacoes",
      component: () => import('pages/localizacoes.vue')
    },
    {
    path: "agenda",
    component: () => import('../pages/agenda.vue')
    },
  ]
},

>>>>>>> 18ee2065b6a3367a1c6b8e49421d71dea57000f0

// Always leave this as last one,
// but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }


]

export default routes
