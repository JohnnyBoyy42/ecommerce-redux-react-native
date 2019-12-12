import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Header from './components/Header/index';
import Main from './pages/Main';
import Cart from './pages/Cart';

const routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header />,
      }),
    }
  )
);

export default routes;
