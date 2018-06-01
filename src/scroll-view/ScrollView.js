import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView,
    Image,
} from 'react-native'

export default class ScrollViewWrap extends Component {
    static navigationOptions = {
        title: 'ScrollView 示例',
    }

    render() {
        return (
            <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Text style={{fontSize:96}}>If you like</Text>
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Text style={{fontSize:96}}>What is the best</Text>
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Image source={require('../../assets/images/test.jpeg')} />
                <Text style={{fontSize:80}}>React Native</Text>

            </ScrollView>
        )
    }
}
