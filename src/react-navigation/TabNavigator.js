import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

import { createTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

class TabFirst extends Component {
    static navigationOptions = {
        title: 'First',
    }

    render () {
        return (
            <View style = {styles.container}>
                <Text> TabFirst </Text>
            </View>
        )
    }
}

class TabSecond extends Component {
    static navigationOptions = {
        title: 'Second',
    }

    render () {
        return (
            <View style = {styles.container}>
                <Text> TabSecond </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default createTabNavigator({
    TabFirst: {
        screen: TabFirst,
        navigationOptions: {
            tabBarLabel: 'Test',
        },
    },
    TabSecond: TabSecond,
}, {
    animationEnabled: true,
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor}) => {
            const { routeName } = navigation.state

            let iconName
            if (routeName === 'TabFirst') {
                iconName = `ios-information-circle${focused ? '' : '-outline'}`
            } else if (routeName === 'TabSecond') {
                iconName = `ios-options${focused ? '' : '-outline'}`
            }

            return <Ionicons name={iconName} size={25} color={tintColor} />
        },
        title: 'Test',
        header: null,
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
    },
})


