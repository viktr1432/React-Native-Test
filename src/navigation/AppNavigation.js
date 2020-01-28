import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MainScreen } from '../screen/MainScreen';
import { Autorisation } from '../components/Autorisation';

const MainNavigator = createStackNavigator(
    {
        Home: Autorisation,
        Main: MainScreen,
    }
);

export const AppNavigation = createAppContainer(MainNavigator);