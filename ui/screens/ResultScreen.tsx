import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export const ResultScreen = () => {

  const highestId = window.setTimeout(() => {
    for (let i = highestId; i >= 0; i--) {
      window.clearTimeout(i);
    }
  }, 0);

  const highestIdTimer = window.setTimeout(() => {
    for (let i = highestIdTimer; i >= 0; i--) {
      window.clearTimeout(i);
    }
  }, 0);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>ResultScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'red',
  },
});
