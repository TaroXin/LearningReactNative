import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native'

export default class ScrollView extends Component {
    static navigationOptions = {
        title: '滚动视图',
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Scroll_View" onPress={() => {this.props.navigation.navigate('ScrollView')}}/>

                <View style={styles.divide}/>

                <Button title="Flat_List" onPress={() => {this.props.navigation.navigate('FlatList')}}/>

                <View style={styles.divide}/>

                <Button title="Section_List" onPress={() => {this.props.navigation.navigate('SectionList')}}/>
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
