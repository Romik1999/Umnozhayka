import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import settings from "../../assets/images/settings.png";
import book from "../../assets/images/book.png";
import test from "../../assets/images/test.png";
import { COLORS } from "../../assets/style";

export const AnswerButton = (props) => {
  const { onPress, isDisabled } = props;
  return (
    <TouchableOpacity onPress={onPress} style={isDisabled ? styles.disabledWrapper : styles.wrapper} disabled={isDisabled}>
      <Text style={styles.text}>Answer</Text>
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
    width: 200,
    height: 50,
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
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'red',
  },
  disabledWrapper:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
    backgroundColor: 'grey',
    width: 200,
    height: 50,
    borderRadius: 10,
    padding: 10,
  }
});
