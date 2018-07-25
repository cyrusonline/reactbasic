import React from 'react'
import {View,Text,StyleSheet,Button,TextInput} from 'react-native'
class PlaceInput extends React.Component{
   state={
       placeName:""
   }

   placeNameChangedHandler = val =>{
    this.setState({
      placeName:val
    });
  };

  placeSubmitHandler = () =>{
    
    if (this.state.placeName.trim()==="") {
      return;
    }
  
    // this.setState(prevState =>{
    //   return{
    //     places: prevState.places.concat(prevState.placeName)
    //   }
    // })
    this.props.onPlaceAdded(this.state.placeName)
  }


render(){
    return (
        <View  >
          <TextInput
          style={{width:300}}
          placeholder = "An awesome place"
          value = {this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          />
          <Button
            title="Add"
            onPress={this.placeSubmitHandler}
          />
          </View>
    )

}
}



const styles = StyleSheet.create({
    

})

export default PlaceInput;