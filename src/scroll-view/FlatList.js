import React, { Component } from 'react'
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native'

export default class FlatListWrap extends Component {
    static navigationOptions = {
        title: 'FlatList示例',
    }

    constructor (props) {
        super(props)

        this.state = {
            data: [],
        }

    }

    componentDidMount () {
        const data = []
        for (let i = 0; i < 100; i ++) {
            data.push({
                image: require('../../assets/images/test.jpeg'),
            })
        }

        this.setState({data})
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    keyExtractor = {(item, index) => `key-${index}`}
                    renderItem = {({item, index}) => {
                        return <Image key={index} source={item.image} style={styles.imageWarp}/>
                    }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageWarp: {
        width: Dimensions.get('window').width,
    },
})
