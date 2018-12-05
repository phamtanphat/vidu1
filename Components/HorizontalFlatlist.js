import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ImageBackground, Alert, Platform, TouchalbeHightlight, TouchableOpacity } from 'react-native';
import { horizontalflatlistdata } from '../Data/horizontalflatlistdata';
import { horizontalStatus } from '../Data/horizontalflatlistdata';

import Icon from 'react-native-vector-icons/Ionicons';
class Item extends Component {
    render() {
        return (
            <View
                style={styles.flatliststyleItem}>
                <Text style={styles.hours}>{this.props.item.hour}</Text>
                <Icon 
                    name={(Platform.OS === 'ios') ? this.props.item.status.ios : this.props.item.status.android}
                    size={30}
                    color='white'>
                </Icon>
                <Text style={styles.degressstyles}>{this.props.item.degress}</Text>

            </View>
        );
    }
}

export default class HorizontalFlatlist extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 150 }}>
                    <FlatList
                        style={styles.flatliststyle}
                        horizontal={true}
                        data={horizontalflatlistdata}
                        keyExtractor={(item, index) => item.hour}
                        renderItem={({ item, index }) =>
                            <Item
                                item={item}
                                index={index}
                                parentFlatlist={this}
                            >
                            </Item>
                        }>
                    </FlatList>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: Platform.OS === 'ios' ? 34 : 0
    },
    flatliststyle: {
        backgroundColor: 'black',
        opacity: 0.5
    },
    flatliststyleItem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: 90,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        margin: 4
    },
    hours: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        margin: 20
    },
    degressstyles: {
        fontSize: 16,
        color: 'white',
        margin: 20
    }
});