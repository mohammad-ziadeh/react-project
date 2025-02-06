import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainRoutes, LoginRoute, HomePage, AboutPage, ContactPage, StudentProfilePage } from 'routes/MainRoutes';

const App = () => {
  return (
    <Routes>
      <Route path={LoginRoute.path} element={LoginRoute.element} />

      <Route path={AboutPage.path} element={AboutPage.element} />
      <Route path={ContactPage.path} element={ContactPage.element} />

      <Route path={HomePage.path} element={HomePage.element} />
      <Route path={StudentProfilePage.path} element={StudentProfilePage.element} />

      <Route path={MainRoutes.path} element={MainRoutes.element}>
        {MainRoutes.children.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
