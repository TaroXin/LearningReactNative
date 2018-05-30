import React from 'react'

import {
    StyleSheet,
    View,
    Button,
} from 'react-native'

export default class Index extends React.Component {
    static navigationOptions = {
        title: 'ReactNative导航器',
    }

    handleButtonClick (name) {
        this.props.navigation.navigate(name, {
            username: 'Yangxin',
        })
    }

    render () {
        return (
            <View style={styles.container}>
                <Button
                    title="向下个路由传递参数->Yangxin"
                    onPress={() => this.handleButtonClick('ParameterTest')}/>

                <View style={styles.divide}/>

                <Button
                    title="设置导航器标题"
                    onPress={() => this.handleButtonClick('HeaderTest')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 32,
    },

    divide: {
        height: 16,
    },
})
