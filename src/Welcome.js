import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class WelcomeApp extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Einri
        </Text>
        <Text style={styles.welcome}>
          欢迎来到爱瑞插件
        </Text>
        <Text style={styles.welcome}>
          Author: Koko Bing
        </Text>
      </View>
    );
  }
}

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
  }
});
