import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';
import { View, StyleSheet, Platform, Image, ImageBackground, Keyboard } from 'react-native';
import {
    Container, Header, Title, Content,
    Footer, FooterTab, Button, Left, Card,
    Right, Body, Icon, Text, Item, Input,
    CardItem, Thumbnail
}
from 'native-base';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import HomeScreenItems from './HomeScreenItems';
var cars = require('../assets/cars.jpg')
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
            color: 'black',
            cardText: 'Some Text Here',
            price: '$500'
        }
    }

    async componentDidMount() {
        console.log(" CDM ( Fonts are loading in HomeScreen... )")
        await Font.loadAsync({
            'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
        })
        this.setState({ fontLoaded: true })
    };

    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: () => (
            <Ionicons name='md-home' size={32} color="blue"
            />
        ),
    };

    render() {
        if (this.state.fontLoaded) {
            return (
                <Container style={styles.container} onPress={Keyboard.dismiss}>
                    {console.log('Fonts are Loaded Now')}
                    {console.log('Cars are Loaded Now', cars)}
                    <Header style={styles.header}>
                        <View>
                            {
                                Platform.OS === 'ios' && <View style={{ backgroundColor: 'red' }} />
                            }
                            {
                                Platform.OS === 'android' && <View style={{ backgroundColor: 'green' }} />
                            }
                        </View>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.openDrawer()} style={{ marginTop: 2 }}>
                                <AntDesign name='menu-unfold' style={{ color: 'black' }} size={32} />
                            </Button>
                        </Left>
                        <Body>
                            {
                                this.state.fontLoaded ? (
                                    <Text style={styles.titleText}>
                                        <Title style={{ color: 'black' }}>
                                            Bazaaroo  {'\n'}
                                        </Title>
                                        <Text note style={{ color: '#ff69b4' }}>Browse & Buy</Text>
                                    </Text>
                                ) : null
                            }

                        </Body>
                        <Right>
                            <Button transparent onPress={() => this.props.navigation.navigate('Settings')}>
                                <AntDesign name='appstore1' style={{ color: 'black' }} size={32} />
                            </Button>
                        </Right >
                    </Header>
                    <Content>
                        <Right>
                            <Button transparent onPress={() => this.setState({ color: this.state.color === 'black' ? 'red' : 'black' })} style={{ marginTop: 10, marginLeft: 300 }}>
                                <AntDesign name='hearto' size={32} style={{ color: this.state.color }} />
                            </Button>
                        </Right>
                        <Card style={{ flex: 0 }}>
                            <CardItem>
                                <Body>
                                    <ImageBackground source={cars} style={{ height: 350, width: 320, flex: 1 }}>
                                        <Text style={{ marginTop: 270, color: 'white', fontFamily: 'open-sans-bold', fontSize: 30 }}>
                                            {this.state.cardText} {'\n'}
                                            {this.state.price}
                                        </Text>
                                    </ImageBackground>
                                </Body>
                            </CardItem>
                        </Card>
                     <HomeScreenItems />
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button full>
                                <Text>Footer</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            );

        }
        else {
            console.log(' HomeScreen AppLoading ...')
            return <AppLoading />
        }

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    header: {
        marginTop: 20,
        backgroundColor: "transparent",
        borderBottomColor: 'blue',
    },
    titleText: {
        marginLeft: 60,
        fontFamily: 'open-sans-bold',
        fontSize: 15,
    },
    heart: {
        color: 'red'
    }
});