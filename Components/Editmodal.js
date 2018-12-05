import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, Platform } from 'react-native';
import Button from 'react-native-button';
import Modal from 'react-native-modalbox';
import Flatlistdata from '../Data/FlatlistData';

var screen = Dimensions.get('window');
export default class Editmodal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodname: '',
            foodDescription: ''
        }
    }
    generCharacter = (numberofCharacter) => {
        return require('random-string')({ length: numberofCharacter });
    }
    showEditmodal = (edittingFood , flatlistItem) =>{
        this.setState({
            key : edittingFood.key,
            foodname : edittingFood.name,
            foodDescription : edittingFood.foodDescription,
            flatlistItem : flatlistItem
        })
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
                    onChangeText={(text) => this.setState({ foodname: text })}
                    placeholder="Enter new food's name"
                    value={this.state.foodname}
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
                    onChangeText={(text) => this.setState({ foodDescription: text })}
                    placeholder="Enter new food's description"
                    value={this.state.foodDescription}
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
                        if (this.state.foodDescription.length === 0 || this.state.foodname.length === 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        var myindex = Flatlistdata.findIndex(item => this.state.key === item.key);
                        if(myindex < 0){
                            return;
                        }
                        Flatlistdata[myindex].name = this.state.foodname;
                        Flatlistdata[myindex].foodDescription = this.state.foodDescription;
                        this.refs.mymodal.close();
                    }}
                >
                    Save
            </Button>
            </Modal>
        );
    }
}