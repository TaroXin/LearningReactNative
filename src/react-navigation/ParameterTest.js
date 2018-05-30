import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

export default class ParameterTest extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('username', 'No name'),
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>username: {this.props.navigation.getParam('username', 'No name')}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 32,
    },
})
