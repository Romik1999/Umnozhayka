import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Switch } from 'react-native-switch';
import { COLORS } from "../../assets/style";

export const ToggleSwitch = (props) => {
  const { value, onToggleSwitch } = props;

  return (
    <View>
      <Text style={styles.text}></Text>
      <Switch
        value={value}
        onValueChange={onToggleSwitch}
        disabled={false}
        changeValueImmediately={true}
        circleSize={30}
        barHeight={30}
        circleBorderWidth={1}
        backgroundActive={COLORS.pink}
        circleActiveColor={'white'}
        circleInActiveColor={COLORS.pink}
        activeText={''}
        inActiveText={''}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
});
