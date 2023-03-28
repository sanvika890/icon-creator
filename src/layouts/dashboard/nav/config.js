// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'products',
    path: '/',

    icon: icon('ic_cart'),
  },
  {
    title: 'sales',
    path: '/',

    icon: icon('ic_user'),
  },

  {
    title: 'invoices',
    path: '/',

    icon: icon('ic_blog'),
  },
  {
    title: 'profile',
    path: '/',

    icon: icon('ic_lock'),
  },
  {
    title: 'Settings',
    path: '/',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
