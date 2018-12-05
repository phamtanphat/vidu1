import React, { Component } from 'react';
import { Dimensions, Text, FlatList, View, Image, StyleSheet, Platform, Alert, TouchableHighlight } from 'react-native';
import FlatlistData from '../Data/FlatlistData';
import Swipeout from 'react-native-swipeout';
import AddModel from './AddModal';
import Editmodal from './Editmodal';
class FlatlistItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowkey : null
        }
    }

    render() {
        const swipeoutSetting = {
            autoClose: true,
            onClose: () => {
                if(this.state.activeRowkey != null){
                    this.setState({ activeRowkey : null});
                }
            },
            onOpen: () => {
                this.setState({activeRowkey : this.props.item.key})
            },
            right: [
                {
                    onPress: () => {
                        this.props.parenFlatlist.refs.editmodal.showEditmodal(FlatlistData[this.props.index] , this);
                    },
                    text:'Edit',
                    type:'primary'
                },
                {
                    onPress: () => {
                        Alert.alert(
                            "Alert",
                            "Are you sure you want to delete?",
                            [
                                { text: 'No', onPress: () => { alert('Cancel Pressed') }, style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        FlatlistData.splice(this.props.index, 1);
                                        this.props.parentFlatlist.refeshAfterdelete(this.props.item.key);
                                    }, style: 'cancel'
                                }
                            ], { cancelable: false }
                        );
                    },
                    text: 'Delete',
                    type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1,
        }
        return (
            <Swipeout {...swipeoutSetting}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', flex: 1, backgroundColor: 'mediumseagreen' }}>
                        <Image
                            style={{ width: 100, height: 100, margin: 5 }}
                            source={{ uri: this.props.item.imgUrl }}>
                        </Image>
                        <View
                            style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={styles.flatlistItem}>{this.props.item.foodDescription}</Text>
                            <Text style={styles.flatlistItem}>{this.props.item.name}</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: 'white' }}>

                    </View>
                </View>
            </Swipeout>

        );
    }
}
export default class FlatlistBasic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idkey: null
        }
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    refeshAfterdelete = (keydelete) => {
        this.setState({ idkey: keydelete })
        this.refs.flatlist.scrollToEnd();
    }
    _onPressAdd(){
        this.refs.addmyModal.showAddModal();
       
    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <View style={{ height: 64, backgroundColor: "tomato", flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <TouchableHighlight
                        style={{marginRight : 10}}
                        underlayColor='tomato'
                        onPress={this._onPressAdd}
                    >
                        <Image source={require('../images/iconplus.png')} style={{ height: 35, width: 35 }}></Image>
                    </TouchableHighlight>
                </View>
                <FlatList
                    ref={'flatlist'}
                    data={FlatlistData}
                    renderItem={({ item, index }) =>
                        <FlatlistItem
                            item={item}
                            index={index}
                            imgUrl={item.imgUrl}
                            parentFlatlist={this}
                        >
                        </FlatlistItem>
                    }>
                </FlatList>
                <AddModel
                     ref={'addmyModal'} 
                     parenFlatlist={this}>
                </AddModel>
                <Editmodal
                     ref={'editmodal'} 
                     parenFlatlist={this}>
                </Editmodal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flatlistItem: {
        color: 'white',
        padding: 10,
        fontSize: 16
    }
})