import React, { Component } from 'react';
import Modal from "react-native-modal";
import { Image, ImageBackground, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import img from '../assets/pizza.jpeg';
import { Ionicons, AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RatingValue: 0.0,
            isModalVisible: false,
            fullAddress: [
                { address: 'ABC',
                  phone: '03001234567',
                  timing: '08:00 to 16:00',
                  foodType: 'Samusa, Roll, Singara',
                  deliveryTime: 40,
                  deliveryType: 'COD, Bkash' 
                }
            ]
        }
    }
    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });    

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left />
            </CardItem>
            <CardItem cardBody>
              <ImageBackground source={ img } style={{height: 200, width: null, flex: 1}}>
              <View style={{ImageBackground: 'white'}}>
              <Text style={{color: 'red'}}>Hello</Text>
              </View>
              </ImageBackground>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent style={{marginRight: 5}}>
                  <Text>{this.state.RatingValue}</Text>
                  <AntDesign active name="staro" size={ 20 } />
                  <AntDesign active name="staro" size={ 20 } />
                  <AntDesign active name="staro" size={ 20 } />
                  <AntDesign active name="staro" size={ 20 } />
                  <AntDesign active name="staro" size={ 20 } />
                </Button>
              </Left>
              <Right>
             <TouchableOpacity onPress={this._toggleModal}>
                <FontAwesome name='share-square-o' size={32} color = 'green' />
        </TouchableOpacity>                
              </Right>
            </CardItem>
          </Card>
          <View>
          { this.state.fullAddress.map((item, index) => {
              return (
              <View key={ index }>
              <View>
               <Left>
               <Text style={{marginTop: 10, marginBottom: 10, marginRight: 300}}>ADDRESS
                <Text note style={{marginTop: 10, marginBottom: 10}}>  {'\n'} {item.address}</Text>
                </Text>
               </Left>
               <Right>
                    <Entypo style={{marginLeft: 300}} name='location' color='green' size={25} 
                    onPress={() => this.props.navigation.navigate('https://www.google.com/') }
                    />
                </Right>
                </View>
                <View
                     style={{
                     borderBottomColor: 'red',
                     borderBottomWidth: 1,
                     width: 150
                     }}
                    />
                <Text style={{marginTop: 10, marginBottom: 10}}>PHONE NUMBER
                <Text note style={{marginTop: 10, marginBottom: 10}}>  {'\n'} {item.phone}</Text>
                </Text>
                <View
                     style={{
                     borderBottomColor: 'red',
                     borderBottomWidth: 1,
                     width: 150
                     }}
                    />


                <Text style={{marginTop: 10, marginBottom: 10}}> TIMING
                <Text note style={{marginTop: 10, marginBottom: 10}}>  {'\n'} {item.timing}</Text>
                </Text>
                <View
                     style={{
                     borderBottomColor: 'red',
                     borderBottomWidth: 1,
                     width: 150
                     }}
                    />

                <Text style={{marginTop: 10, marginBottom: 10}}> FOOD TYPE
                <Text note style={{marginTop: 10, marginBottom: 10}}>  {'\n'} {item.foodType}</Text>
                </Text>
                <View
                     style={{
                     borderBottomColor: 'red',
                     borderBottomWidth: 1,
                     width: 150
                     }}
                    />

                <Text style={{marginTop: 10, marginBottom: 10}}> DELIVERY TIME
                <Text note style={{marginTop: 10, marginBottom: 10}}>  {'\n'} {item.deliveryTime}</Text>
                </Text>
                <View
                     style={{
                     borderBottomColor: 'red',
                     borderBottomWidth: 1,
                     width: 150
                     }}
                    />

                <Text style={{marginTop: 10, marginBottom: 10}}> DELIVERY TYPE
                <Text note style={{marginTop: 30, marginBottom: 30}}>  {'\n'} {item.deliveryType}</Text>
                </Text>
                <View
                     style={{
                     borderBottomColor: 'red',
                     borderBottomWidth: 1,
                     width: 150
                     }}
                    />
              </View>
              )
          })}
      </View>
          <View style={{height:100 }}>
          <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent:'center' }}>
          <View style={{backgroundColor: 'grey', width:300}}>
            <Text style={{color:'white', marginTop: 10}}>Share!</Text>
            <Text style={{color:'white', marginTop: 10}}>Share Home Made delivery with !</Text>
            <Text style={{color:'green', marginTop: 10}}>More {'\t'} {'\t'}  {'\t'} {'\t'} {'\t'} Whatsap {'\t'} {'\t'} Facebook</Text>
            </View>
            <TouchableOpacity onPress={this._toggleModal}>
              <Ionicons name='md-close-circle-outline' size={32} color='red' />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </Content>
      </Container>
    );
  }
}