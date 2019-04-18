import React, { Component } from 'react';
import { Image } from 'react-native';
import { Font, AppLoading } from 'expo';
import { Container,  View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body  } from 'native-base';
import { Ionicons, AntDesign } from '@expo/vector-icons';
const swiper1 = require('../assets/swiper-1.jpg')
const swiper2 = require('../assets/swiper-2.jpg')
const swiper3 = require('../assets/swiper-3.jpg')
export default class HomeScreenItems extends Component {
    constructor(props){
        super(props);
        this.state = {
            fontLoaded: false,
            cards : [
                {
                  text: 'Card One',
                  name: 'One',
                  image: swiper1,
                },
                {
                    text: 'Card Two',
                    name: 'Two',
                    image: swiper2,
                  },
                  {
                    text: 'Card Three',
                    name: 'Three',
                    image: swiper3,
                  },
              ]
        }
    }
   async componentDidMount() {
    await Font.loadAsync({
        'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),           
       })
       this.setState({
           fontLoaded: true
       })
       console.log('HomeScreenItms Fonts are ready to use')

      
    };
    
    render() {
if( this.state.fontLoaded ){
    return (
        <Container>
            <View>
          <DeckSwiper
            dataSource={ this.state.cards }
            renderItem={ item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={ item.image } />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <AntDesign name="hearto" size={ 25 } style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
        </Container>
    );
} else {
    console.log('HomeScreenItms are loading the fonts ...')
    return <AppLoading />        
}
    
    }
}



{/* <CardItem>
<Left>
    <Body>
        <Text style={{ backgroundColor: 'yellow', color: 'black', fontFamily: 'open-sans-bold', fontSize: 15 }}>Feature Product</Text>
    </Body>
</Left>
<Right>
    <Button transparent>
        <Text style={{ color: 'black', marginLeft: 15, backgroundColor: 'pink', fontFamily: 'open-sans-bold', fontSize: 15 }}>Show All<AntDesign name='right' size = { 15 } /></Text>
    </Button>
</Right>
</CardItem> */}