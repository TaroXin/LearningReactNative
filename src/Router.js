
import ReactNavigation from './react-navigation/Index'
import ParameterTest from './react-navigation/ParameterTest'
import HeaderTest from './react-navigation/HeaderTest'
import TabNavigator from './react-navigation/TabNavigator'

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
}
