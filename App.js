import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { createDrawerNavigator, createAppContainer} from "react-navigation";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Test Screen</Text>
      </View>
    );
  }
}

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Test Screen</Text>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyApp />
    );
  }
}

const AppStack = createDrawerNavigator({
  home: {screen: Home},
  dashboard: {screen: Dashboard}
});

const MyApp = createAppContainer(AppStack);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


 
export default App;
