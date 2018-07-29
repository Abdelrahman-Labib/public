import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// import {Actions} from 'react-native-router-flux';

export default class Signup extends React.Component {

    // goBack(){
    //     Actions.pop();
    // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>- Egaazt -</Text>

        <TextInput style={styles.input}
          underlineColorAndroid='rgba(0,0,0,0)' placeholder="Username"
          placeholderTextColor="#999999" />

        <TextInput style={styles.input}
          underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#999999" />

          <TextInput style={styles.input}
          underlineColorAndroid='rgba(0,0,0,0)' placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#999999" />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>

          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Already have an account?</Text>
            <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signupButton}> Sign in</Text>
            </TouchableOpacity>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
logo:{
  color: 'white',
  fontSize: 40,
  fontStyle: 'italic',
  fontWeight: 'bold',
  textShadowColor: '#252525',
  textShadowOffset:{width: 2, height: 2},
  textShadowRadius: 15,
  marginBottom: 20,
},
input:{
  width: 300,
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  borderRadius: 25,
  marginBottom: 10,
  padding: 10,
  height: 40,
  fontSize: 16,
  color: '#999999',
},
button:{
  width: 300,
  backgroundColor: '#367fa9',
  borderRadius: 25,
  marginVertical: 10,
  paddingVertical: 12
},
buttonText:{
  fontSize: 16,
  fontWeight: '500',
  color: '#fff',
  textAlign: 'center'
},
signupTextCont:{
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  bottom: 25,
  left: 0,
  right: 0,
  flexDirection: 'row'
},
signupText:{
  color:'#999999',
  fontSize: 16
},
signupButton:{
  color:'#367fa9',
  fontSize: 16,
  fontWeight: '500',
}
  
});
