import React from 'react';
import { SafeAreaView, Image, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from "./ui/screens/HomeScreen";
import {LearnScreen} from "./ui/screens/LearnScreen";
import {SettingsScreen} from "./ui/screens/SettingsScreen";
import {TaskScreen} from "./ui/screens/TaskScreen";
import settings from './assets/images/settings.png';

const Tab = createBottomTabNavigator();

export const Navigate = () => {
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
          component={TaskScreen}
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
