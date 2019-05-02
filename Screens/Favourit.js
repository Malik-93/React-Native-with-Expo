import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class Favourite extends Component {
    static navigationOptions = {
        drawerLabel: 'Favourite',
        drawerIcon: () => (
              <Image
                source={require('../assets/favourite-mark.png')}
                style={ styles.icon } color = 'black'
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
                        <Title style={{marginLeft: 5}}>Favourite</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>
                        This is Favourite Screen
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
        height: 35,    },
});