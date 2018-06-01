
import ReactNavigation from './react-navigation/Index'
import ParameterTest from './react-navigation/ParameterTest'
import HeaderTest from './react-navigation/HeaderTest'
import TabNavigator from './react-navigation/TabNavigator'
import DrawerNaigator from './react-navigation/DrawerNavigator'

export default {
    ReactNavigation: ReactNavigation,
    ParameterTest: ParameterTest,
    HeaderTest: HeaderTest,
    TabNavigator: {
        screen: TabNavigator,
        navigationOptions: {
            header: null,
        },
    },
    DrawerNaigator: {
        screen: DrawerNaigator,
        navigationOptions: {
            header: null,
        },
    },
}
