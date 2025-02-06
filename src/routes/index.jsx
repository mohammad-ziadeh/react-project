import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes, { LoginRoute, HomePage, AboutPage, ContactPage, StudentProfilePage } from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, LoginRoute, AuthenticationRoutes, HomePage, AboutPage, ContactPage, StudentProfilePage]);
}
