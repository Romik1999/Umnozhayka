import React from 'react';
import { SafeAreaView, Image, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from "./ui/screens/HomeScreen";
import {LearnScreen} from "./ui/screens/LearnScreen";
import {SettingsScreen} from "./ui/screens/SettingsScreen";
import {TaskScreen} from "./ui/screens/TaskScreen";
import {ResultScreen} from "./ui/screens/ResultScreen";
import {TestScreen} from "./ui/screens/TestScreen";
import settings from './assets/images/settings.png';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const Navigate = () => {
  const TestBlock = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="TestScreen" component={TestScreen} />
        <Stack.Screen name="TaskScreen" component={TaskScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Image
                style={styles.logo}
                source={settings}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Learn"
          component={LearnScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Image
                style={styles.logo}
                source={settings}
              />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Image
                style={styles.logo}
                source={settings}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Task"
          component={TestBlock}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Image
                style={styles.logo}
                source={settings}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logo:{
    width: 50,
    height: 50,
  }
});
