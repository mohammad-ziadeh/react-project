import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import LoginPage from '../views/Login/creatAndLogin';
import Loadable from 'component/Loadable';

// Lazy-loaded components
const DashboardDefault = Loadable(lazy(() => import('views/Dashboard/Default')));
const SamplePage = Loadable(lazy(() => import('views/SamplePage/crud')));
import HomeRoute from '../pages/home';
const AboutRoute = Loadable(lazy(() => import('../pages/about')));
const ContactRoute = Loadable(lazy(() => import('../pages/contact-page')));
const Profile = Loadable(lazy(() => import('../views/profile/profile')));
const StudentProfile = Loadable(lazy(() => import('../views/studentProfile/profile')));

// ==============================|| MAIN ROUTES ||============================== //

const LoginRoute = {
  path: '/',
  element: <LoginPage />
};

const MainRoutes = {
  path: '/dashboard',
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: <DashboardDefault />
    },
    {
      path: 'default',
      element: <DashboardDefault />
    },
    {
      path: 'profile',
      element: <Profile />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

const HomePage = {
  path: '/home',
  element: <HomeRoute />
};

const AboutPage = {
  path: '/about',
  element: <AboutRoute />
};

const ContactPage = {
  path: '/contact',
  element: <ContactRoute />
};
const StudentProfilePage = {
  path: '/student-profile',
  element: <StudentProfile />
};

export { MainRoutes, LoginRoute, HomePage, AboutPage, ContactPage, StudentProfilePage };
