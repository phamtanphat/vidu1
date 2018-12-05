/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FlatlistBasic from './Components/FlatlistBasic'
import HorizontalFlatlist from './Components/HorizontalFlatlist'

AppRegistry.registerComponent(appName, () => HorizontalFlatlist);
