import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MainScreen } from '../screen/MainScreen';
import { Authorization } from '../components/Authorization';
import { QuestionScreen } from '../screen/QuestionScreen';
import { AllQuestionScreen } from '../screen/AllQuestionScreen';
import { Platform } from 'react-native';
import { THEME } from '../theme';

const MainNavigator = createStackNavigator(
    {
        Home: Authorization,
        Main: MainScreen,
        AllQuestion: AllQuestionScreen,
        Question: QuestionScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? THEME.HEADER_COLOR : 'fff'
            },
            headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.HEADER_COLOR,

        }
    }
);

export const AppNavigation = createAppContainer(MainNavigator);