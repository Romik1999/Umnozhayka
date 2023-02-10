import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import settings from "../../assets/images/settings.png";
import book from "../../assets/images/book.png";
import test from "../../assets/images/test.png";
import { COLORS } from "../../assets/style";

export const ClearButton = (props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <Text style={styles.text}>Clear</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
    backgroundColor: COLORS.yellow,
    width: 70,
    height: 170,
    borderRadius: 10,
    padding: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
});
