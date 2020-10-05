import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList126143Navigator from '../features/NotificationList126143/navigator';
import Settings126142Navigator from '../features/Settings126142/navigator';
import Settings126134Navigator from '../features/Settings126134/navigator';
import UserProfile126132Navigator from '../features/UserProfile126132/navigator';
import BlankScreen0126110Navigator from '../features/BlankScreen0126110/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList126143: { screen: NotificationList126143Navigator },
Settings126142: { screen: Settings126142Navigator },
Settings126134: { screen: Settings126134Navigator },
UserProfile126132: { screen: UserProfile126132Navigator },
BlankScreen0126110: { screen: BlankScreen0126110Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
