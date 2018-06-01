import React, { Component } from 'react'
import {
    StyleSheet,
    Dimensions,
    View,
    Text,
    SectionList,
    Image,
} from 'react-native'

export default class SectionListWrap extends Component {
    static navigationOptions = {
        title: 'SectionList示例',
    }

    constructor (props) {
        super(props)
        this.state = {
            sections: [],
        }
    }

    componentDidMount () {
        const sections = []
        for (let i = 0; i < 5; i ++ ) {
            const data = []
            for (let j = 0; j < 10; j ++) {
                data.push({
                    image: require('../../assets/images/test.jpeg'),
                })
            }
            sections.push({
                title: 'header ' + i,
                data: data,
            })
        }

        this.setState({sections})
    }

    render() {
        return (
            <View>
                <SectionList
                    sections={this.state.sections}
                    keyExtractor={(item, index) => `key-${index}`}
                    renderItem={({item}) => {
                        return <Image source={item.image} style={styles.imageWrap}/>
                    }}

                    renderSectionHeader={({section}) => {
                        return <Text>{section.title}</Text>
                    }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageWrap: {
        width: Dimensions.get('window').width,
    },
})
