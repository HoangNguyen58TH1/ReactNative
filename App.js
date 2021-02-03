import React from 'react';
import { createAppContainer } from "react-navigation";
import AppNavigator from './AppNavigator';
import axios from 'axios';
axios.defaults.baseURL = 'https://4c9f1855c0ec.ngrok.io'

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}