import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/NBcommon/LoginForm';
import RestaurantList from './components/RestaurantList';
import RestaurantCreate from './components/RestaurantCreate';// maybe I don't need this after all

const RouterComponent = () => {

  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene 
          key="login"
          component={LoginForm}
          title="Welcome!"
          initial
        />
      </Scene>
      <Scene key="main">
        <Scene
          key="restaurantList"
          component={RestaurantList}
          title="My Restaurants"
          initial
        />
        <Scene
          key="restaurantCreate"
          component={RestaurantCreate}
          title="Find a restaurant"
        />
      </Scene>
    </Router>
  )
};

export default RouterComponent;