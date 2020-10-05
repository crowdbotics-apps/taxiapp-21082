import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings126339Navigator from '../features/Settings126339/navigator';
import Settings126331Navigator from '../features/Settings126331/navigator';
import UserProfile126329Navigator from '../features/UserProfile126329/navigator';
import BlankScreen23126275Navigator from '../features/BlankScreen23126275/navigator';
import UserProfile126243Navigator from '../features/UserProfile126243/navigator';
import Tutorial126242Navigator from '../features/Tutorial126242/navigator';
import NotificationList126214Navigator from '../features/NotificationList126214/navigator';
import Settings126213Navigator from '../features/Settings126213/navigator';
import Settings126205Navigator from '../features/Settings126205/navigator';
import UserProfile126203Navigator from '../features/UserProfile126203/navigator';
import UserProfile126172Navigator from '../features/UserProfile126172/navigator';
import Tutorial126171Navigator from '../features/Tutorial126171/navigator';
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
Settings126339: { screen: Settings126339Navigator },
Settings126331: { screen: Settings126331Navigator },
UserProfile126329: { screen: UserProfile126329Navigator },
BlankScreen23126275: { screen: BlankScreen23126275Navigator },
UserProfile126243: { screen: UserProfile126243Navigator },
Tutorial126242: { screen: Tutorial126242Navigator },
NotificationList126214: { screen: NotificationList126214Navigator },
Settings126213: { screen: Settings126213Navigator },
Settings126205: { screen: Settings126205Navigator },
UserProfile126203: { screen: UserProfile126203Navigator },
UserProfile126172: { screen: UserProfile126172Navigator },
Tutorial126171: { screen: Tutorial126171Navigator },
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
