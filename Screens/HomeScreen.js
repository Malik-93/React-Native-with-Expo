import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import {
    Container, Header, Title, Content,
    Footer, FooterTab, Button, Left,Card,
    Right, Body, Icon, Text, Item, Input,
    CardItem, Thumbnail
}
from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: () => (
            <Ionicons name='md-home' size={32} color = "blue"
            />
        ),
    };


    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()} style={{ marginTop: 2 }}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Chittagong</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('Settings')}>
                            <Icon name='settings' />
                        </Button>
                    </Right >
                </Header>
                {/* <View style={{position: 'absolute', left: 0, right: 0, top: 90,height:70,backgroundColor:'green'}}>

                </View> */}
                <Content searchBar rounded>
                    <Item style={{marginLeft: 10}}>
                        <Icon name="ios-search" />
                        <Input placeholder="Search by name, food category and..." />
                    </Item>

                    <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/pizza.jpeg')} />
                <Body>
                  <Text>Nazma Home Made Food</Text>
                  <Text note>Samosa, Rol</Text>
                </Body>
              </Left>
            </CardItem>
            </Card>
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
}
const styles = StyleSheet.create({
});