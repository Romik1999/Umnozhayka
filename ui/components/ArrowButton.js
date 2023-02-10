import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import settings from "../../assets/images/settings.png";
import book from "../../assets/images/book.png";
import { COLORS } from "../../assets/style";

export const ArrowButton = (props) => {
  const { onPress, direction } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <Image style={styles.icon} source={direction === 'left' ? settings : book} />
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
    width: 50,
    height: 50,
    borderRadius: 10,
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
