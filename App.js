import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import Placelist from './src/components/PlaceList/PlaceList';
export default class App extends React.Component {
  state = {
    placeName:'',
    places:[]
  }

placeNameChangedHandler = val =>{
  this.setState({
    placeName:val
  });
};
handlePressButton = ()=>{
  Alert.alert({places})
}
placeSubmitHandler = () =>{
  
  // if (this.state.placeName.trim()==="") {
  //   return;
  // }

  this.setState(prevState =>{
    return{
      places: prevState.places.concat(prevState.placeName)
    }
  })
}

  render() {
    const placesOutput = this.state.places.map((place,i) =>(
      <ListItem key={i} placeName={place}/>
    ));
    return (
      <View style={styles.container}>
   
      
        <View style={styles.inputContainer}>
        <TextInput 
        style={{width:300}}
        placeholder = "some places"
        value = {this.state.placeName} 
        onChangeText={this.placeNameChangedHandler}
        style={styles.placeInput}
        />
        <Button 
        title="Adds" 
        style={styles.placeButton}
        onPress = {this.placeSubmitHandler}
        />

        </View>
       <Placelist 
       places = {this.state.places}
       />
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
