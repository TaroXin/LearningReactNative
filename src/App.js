import React from 'react'

import {
    StyleSheet,
    YellowBox,
    View,
    Text,
    Button,
} from 'react-native'

import { createStackNavigator } from 'react-navigation'
import Router from './Router'

class App extends React.Component {
    static navigationOptions = {
        title: '首页',
    }

    handleButtonClick (name) {
        this.props.navigation.navigate(name)
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>开始学习吧</Text>

                <Button title="ReactNative导航器" onPress={() => this.handleButtonClick('ReactNavigation')}/>

                <View style={styles.divide}/>

                <Button title="滚动视图" onPress={() => this.handleButtonClick('Scroller')}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 32,
    },

    mt16: {
        marginTop: 16,
    },

    divide: {
        height: 16,
    },
})

// 应该是 ReactNavigation 的一个Bug导致一直报黄屏，所以屏蔽掉就好了
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

export default createStackNavigator({
    App: App,
    ...Router,
}, {
    // initialRouteName: 'App',
    // navigationOptions: {
    //     headerStyle: {
    //         backgroundColor: 'red',
    //     },
    // },
})
