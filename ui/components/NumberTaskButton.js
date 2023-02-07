import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../assets/style";

export const NumberTaskButton = (props) => {
  const { title, onPress } = props;
  const taskButtons = useSelector((state) => state.app.taskButtons)
  const currentTaskButtonIsSelect = taskButtons[title]

  return (
    <TouchableOpacity onPress={onPress} style={currentTaskButtonIsSelect ? styles.pinkWrapper : styles.wrapper}>
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
    width: 60,
    height: 50,
    borderRadius: 20,
    padding: 10,
  },
  pinkWrapper:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.pink,
    width: 60,
    height: 50,
    borderRadius: 20,
    padding: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000000",
  },
});
