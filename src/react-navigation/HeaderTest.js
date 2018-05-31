import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button,
    Alert,
} from 'react-native'

import HeaderButtons from 'react-navigation-header-buttons'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class HeaderTest extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', '默认标题'),
            headerStyle: {
                backgroundColor: '#F4511E',
            },
            headerTintColor: '#FFFFFF',
            headerBackTitle: 'Test',
            headerRight: (
                <HeaderButtons IconComponent={Ionicons} OverflowIcon={<Ionicons name="ios-more" size={23} color="blue" />} iconSize={23} color="blue">
                    <HeaderButtons.Item title="add" iconName="ios-add" onPress={() => console.warn('add')} />
                    <HeaderButtons.Item title="select" onPress={() => console.warn('edit')} />
                </HeaderButtons>
            ),
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>设置导航栏</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 32,
    },
})
