import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
export default class App extends React.Component {
  state = {
    places:[]
  }

  placeAddedHandler = placeName =>{
   this.setState(prevState =>{
    return{
      places:prevState.places.concat(placeName)
    }
   });
  }
  render() {
    // const placesOutput = this.state.places.map((place,i) =>(
    //   <ListItem key={i} placeName={place}/>
    // ));
    return (
      <View style={styles.container}>
   
      
       <PlaceInput onPlaceAdded = {this.placeAddedHandler}/>
       <PlaceList places={this.state.places}/>
      

     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    padding:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer:{
    // flex:1,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  placeInput:{
    width:"70%"
  },
  placeButton:{
    width:"30%"
  }
});
