import React, { Component } from "react";
import { StyleSheet, NetInfo, Alert, Platform, Button, View } from "react-native";
import Products from './components/products';
import Login from './components/login';

export default class App extends Component {

  
  render() {
    return (
      <View style={styles.container}>
        {/* <Login /> */}
        <Products />
      </View>
    );
  }
}
// AppRegistry.registerComponent('App', () => App);

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",

  },
  
});
