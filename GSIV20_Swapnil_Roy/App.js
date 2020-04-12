import 'react-native-gesture-handler';
import React from "react";
import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/routes/Route";
import { Provider } from "react-redux";
import configureStore from './src/store/store'
const store = configureStore();
export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Root/>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  }
});
