import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/dav', component: '@/pages/dva' },
    {
      path: '/user',
      component:'@/layouts/index',
      routes: [
        { path: '/home', component: '@/pages/home/home.tsx'}
      ]
    },
    
  ],
  fastRefresh: {},
});
