import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, Platform } from 'react-native';
import Button from 'react-native-button';
import Modal from 'react-native-modalbox';
import Flatlistdata from '../Data/FlatlistData';

var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFoodName: '',
            newFoodDescription: ''
        }
    }
    generCharacter = (numberofCharacter) => {
        return require('random-string')({ length: numberofCharacter });
    }
    showAddModal() {
        this.refs.mymodal.open();
    }   
   
    render() {
        return (
            <Modal
                ref={'mymodal'}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                }}

            >
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: 40
                    }}>
                    New food's information
            </Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({ newFoodName: text })}
                    placeholder="Enter new food's name"
                    value={this.state.newFoodName}
                >
                </TextInput>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({ newFoodDescription: text })}
                    placeholder="Enter new food's description"
                    value={this.state.newFoodDescription}
                >
                </TextInput>
                <Button
                    style={{
                        fontSize: 18, color: 'white', padding: 8,
                        marginLeft: 70,
                        marginRight: 80,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                        if (this.state.newFoodDescription.length === 0 || this.state.newFoodName.length === 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        const newkey = this.generCharacter(24);
                        const newfood = {
                            key: newkey,
                            name: this.state.newFoodName,
                            imgUrl: "https://media3.scdn.vn/img2/2018/8_31/K5SoF8_simg_b5529c_250x250_maxb.jpg",
                            foodDescription: this.state.newFoodDescription

                        }
                        Flatlistdata.push(newfood);
                        this.props.parenFlatlist.refeshAfterdelete(newkey);
                        this.refs.mymodal.close();
                    }}
                >
                    Save
            </Button>
            </Modal>
        );
    }
}