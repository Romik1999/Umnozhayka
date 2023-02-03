import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../assets/style";

export const NumberButton = (props) => {
  const { title, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.yellow,
    width: 70,
    height: 50,
    borderRadius: 20,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
});
