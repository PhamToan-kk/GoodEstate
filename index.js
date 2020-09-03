/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppXX from './src/navigation/MainNavigator';
import {LoginScreen, ChartScreen} from './src/containers';
//import {UserProfile} from './src/containers/profile';
AppRegistry.registerComponent(appName, () => ChartScreen);
