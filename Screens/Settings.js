import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class Settings extends Component {

    static navigationOptions = {
        drawerLabel: 'Settings',
        drawerIcon: () => (
            <Ionicons name='md-settings' size={32}
            />
        ),
    };

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ marginLeft: 5 }}>Settings</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>
                        This is Settings Screen
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