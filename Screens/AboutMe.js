import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class AboutMe extends Component {
    static navigationOptions = {
        drawerLabel: 'About Me',
        drawerIcon: () => (
            //   <Image
            //     source={require('../assets/download.jpg')}
            //     style={[styles.icon, {tintColor: tintColor}]}
            //   />
            <Ionicons name = 'md-contact' size = {32} color = "blue"
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
                        <Title style={{marginLeft: 5}}>AboutMe</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>
                        This is AboutMe Screen
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