import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class FoodCategory extends Component {
    static navigationOptions = {
        drawerLabel: 'Food Category',
        drawerIcon: () => (
              <Image
                source={require('../assets/Food-1.png')}
                style={ styles.icon }
              />
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
                        <Title style={{marginLeft: 5}}>FoodCategory</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>
                        This is FoodCategory Screen
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
    icon: {
        width: 35,
        height: 35,
    },
});