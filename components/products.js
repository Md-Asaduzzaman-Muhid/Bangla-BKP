import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, AppRegistry} from "react-native";

export default class Products extends Component {
  state = {
    loading: false,      
    data: [],      
    error: null, 
  };
  

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("http://staging.banglameds.com.bd/test.php");
    const json = await response.json();
    this.setState({ data: json });
  };



  render() {
    return (
        <View >
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          
          renderItem={({ item }) =>
            <Text style={styles.name}>
              {`${item.name} ${item.price} `}
            </Text>}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Products', () => Products);

const styles = StyleSheet.create({
  name: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    borderWidth: 1,
    borderColor: '#d6d7da',
  }
});
