import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';
export default class MyOrders extends Component {

    static navigationOptions = {
        drawerLabel: 'My Orders',
        drawerIcon: () => (
            <Ionicons name = "md-cart" size = {32} color = "green"  />
            ),
    };

    
      render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress = { () => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{marginLeft: 5}}>MyOrders</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>
                        This is MyOrders Screen
                    </Text>
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