import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue'),
  },

  {
    path: '/register',
    component: () => import('pages/Register.vue'),
  },

  {
    path: '/dashboard',
    component: () => import('pages/Dashboard.vue'),
  },

  {
    path: '/explorerdashboard',
    component: () => import('pages/ExplorerDashboard.vue'),
  },
  {
    path: '/explorertransaction',
    component: () => import('pages/ExplorerTransaction.vue'),
  },
  {
    path: '/explorerblocks',
    component: () => import('pages/ExplorerBlocks.vue'),
  },
  {
    path: '/exploreraccountdetails',
    component: () => import('pages/ExplorerAccountDetails.vue'),
  },
  {
    path: '/explorerblockdetails',
    component: () => import('pages/ExplorerBlockDetails.vue'),
  },
  {
    path: '/explorertransactiondetails',
    component: () => import('pages/ExplorerTransactionDetails.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
