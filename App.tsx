import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import { Navigate } from "./Navigate";

export const App = () => {
  return (
    // <SafeAreaView style={styles.wrapper}>
    //   <Text>Hello!</Text>
    // </SafeAreaView>
    <Navigate/>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'red',
  },
});
