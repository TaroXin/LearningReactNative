import React, { Component } from 'react'

import {
    View,
    Text,
    Button,
    ScrollView,
} from 'react-native'

import { DrawerNavigator, DrawerItems } from 'react-navigation'

class Home extends Component {
    static navigationOptions = {
        drawerLabel: 'open',
    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <Button title="OPEN" onPress={() => {this.props.navigation.openDrawer()}}/>
            </View>
        )
    }
}

class About extends Component {
    render () {
        return (
            <View>
                <Text>This is Drawer</Text>
            </View>
        )
    }
}


export default DrawerNavigator({
    Home: Home,
    About: About,
}, {
    drawerWidth: 350, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
        initialRouteName: 'Home', // 默认页面组件
        activeItemKey : 'Notifications',
        labelStyle : {//标签样式
            // color : 'red',
            height : 30,
        },
        activeTintColor: 'white',  // 选中文字颜色
        activeBackgroundColor: '#ff8500', // 选中背景颜色
        inactiveTintColor: '#666',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式
            marginVertical: 0,
        },
        //没有作用
        onItemPress : (route) => {
            console.log('-------->' + JSON.stringify(route))
        },

    },

    contentComponent: props => {
        console.log('contentComponent')
        console.log(props)
        return (
            <ScrollView>
                <View>
                    <View style={{paddingVertical: 20, paddingHorizontal: 15, backgroundColor:'#000'}}>
                        <Text style={{color:'#FFF'}}>Header</Text>
                    </View>
                    <DrawerItems {...props} />
                </View>
            </ScrollView>
        )
    },
})
