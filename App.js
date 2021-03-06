import React from 'react';
import { Font, AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native'
import HomeScreen from './Screens/HomeScreen';
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import Search from './Screens/Search';
import SearchOnMap from './Screens/SearchOnMap';
import AboutMe from './Screens/AboutMe';
import Favourite from './Screens/Favourit';
import FoodCategory from './Screens/FoodCategory';
import MyOrders from './Screens/MyOrders';
import Share from './Screens/Share';
import TermsAndConditions from './Screens/TemsAndConditions';
import TopRated from './Screens/TopRated';
import Settings from './Screens/Settings';
import ItemDetails from './Screens/ItemDetails';

const { width, height } = Dimensions.get('screen');

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { fontLoaded: false }
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ fontLoaded: true });
  }

render() {
if( !this.state.fontLoaded ) {
  return (
    <AppLoading>
      {  console.log ('App Loading ......') }
    </AppLoading>
  ) 
}
return (
  <View style={styles.container}>
  { console.log ( "Now fonts are loaded in App" ) }
    <NavContainer />
  </View>
); 
 

}

}

const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen: HomeScreen
  },
  SearchRestaurant: {
    screen: Search
  },
  SearchOnMap: {
    screen: SearchOnMap
  },
  TopRated: {
    screen: TopRated
  },
  FoodCategory: {
    screen: FoodCategory
  },
  Favourite: {
    screen: Favourite
  },
  MyOrders: {
    screen: MyOrders
  },
  Share: {
    screen: Share
  },
  TermsAndConditions: {
    screen: TermsAndConditions
  },
  AboutMe: {
    screen: AboutMe
  },
  Settings: {
    screen: Settings
  },
  ItemDetails: {
    screen: ItemDetails
  }
},
{
  drawerWidth: Math.min(height, width) * 0.8, // calculates 80% of the smaller side of the screen.
  drawerHeight: Math.min(height, width) * 0.12, // calculates 80% of the smaller side of the screen.
}

)

const NavContainer =  createAppContainer(AppDrawerNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    },
});
