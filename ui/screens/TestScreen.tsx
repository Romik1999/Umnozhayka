import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export const TestScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>TestScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "red"
  }
});
