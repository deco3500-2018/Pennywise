import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from './app/components/Home';
import Dashboard from './app/components/Dashboard';
export default createStackNavigator({
  home: Home,
  dashboard: Dashboard
})
