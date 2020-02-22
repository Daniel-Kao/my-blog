import BlogContainer from '../containers/blog';
import CreateContainer from '../containers/create';
import HomeContainer from '../containers/home';
import Layout from '../layout';

export default [
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/',
        component: HomeContainer,
        exact: true,
        key: 'home'
      },
      {
        path: '/blog',
        component: BlogContainer,
        exact: true,
        key: 'home'
      },
      {
        path: '/create',
        component: CreateContainer,
        exact: true,
        key: 'home'
      }
    ]
  }
];
