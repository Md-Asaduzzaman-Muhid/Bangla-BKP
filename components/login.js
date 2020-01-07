import React, { Component } from "react";
import { StyleSheet, TextInput, View, Button, Linking, AppRegistry } from "react-native";

export default class Login extends Component {
  state = {
    data: []
  };

  render() {
    return (
        <View >
        <TextInput style={styles.phoneInput} placeholder= "Enter Phone Number" />
        <Button style={styles.btnCommon}
          title="Send OTP"
          onPress={() => Linking.openURL('https://google.com')}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Login', () => Login);

const styles = StyleSheet.create({
  phoneInput:{
    borderWidth: 1,
    borderColor: '#d6d7da',
    backgroundColor: '#ffffff',
    padding: 10,
    marginTop: 20,
    marginBottom: 20 
  },
  btnCommon: {
    marginBottom: 20,
  }
});
