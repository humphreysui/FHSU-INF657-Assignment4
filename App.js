import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileCard from "./components/ProfileCard";
import Signup from "./components/Signup";

export default function App() {
  return (
    <View style={styles.container}>
      <Signup/>
      <ProfileCard/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,     
    alignItems: 'center',
    justifyContent: 'center',
  },

});
