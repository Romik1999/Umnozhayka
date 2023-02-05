import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { COLORS } from "../../assets/style";
import { data } from "../../assets/data/data";
import { NumberButton } from "../components/NumberButton";

export const LearnScreen = () => {
  const currentNumber = 1

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.title}>{currentNumber} x</Text>
      <View style={styles.tableBlock}>
        {data[currentNumber].map(item=><Text style={styles.dataItem}>{item}</Text>)}
      </View>
      <View style={styles.buttonsBlock}>
        <View style={styles.row}>
          <NumberButton title={1} onPress={()=>{}}/>
          <NumberButton title={2} onPress={()=>{}}/>
          <NumberButton title={3} onPress={()=>{}}/>
          <NumberButton title={4} onPress={()=>{}}/>
          <NumberButton title={5} onPress={()=>{}}/>
          <NumberButton title={6} onPress={()=>{}}/>
          <NumberButton title={7} onPress={()=>{}}/>
          <NumberButton title={8} onPress={()=>{}}/>
          <NumberButton title={9} onPress={()=>{}}/>
          <NumberButton title={10} onPress={()=>{}}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: Dimensions.get("window").height,
    backgroundColor: COLORS.green,
    padding: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  title: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "bold"
  },
  tableBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dataItem: {
    fontSize: 18,
    color: "#000000",
  },
  buttonsBlock: {
    display: "flex",
    justifyContent: "center"
  }
});
