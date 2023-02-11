import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Dimensions, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { COLORS } from "../../assets/style";
import { data } from "../../assets/data/data";
import { NumberButton } from "../components/NumberButton";
import {setCurrentNumber} from '../../bll/reducer';

export const LearnScreen = () => {
  const currentNumber = useSelector((state) => state.app.currentNumber)
  const dispath = useDispatch();
  const onPressNumberButton = (number) => {
    dispath(setCurrentNumber(number))
  }

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
      <Text style={styles.title}>{currentNumber} x</Text>
      <View style={styles.tableBlock}>
        {data[currentNumber].map(item => <Text style={styles.dataItem}>{item}</Text>)}
      </View>
      <View style={styles.buttonsBlock}>
        <View style={styles.row}>
          <NumberButton title={1} onPress={()=>{onPressNumberButton('1')}}/>
          <NumberButton title={2} onPress={()=>{onPressNumberButton('2')}}/>
          <NumberButton title={3} onPress={()=>{onPressNumberButton('3')}}/>
          <NumberButton title={4} onPress={()=>{onPressNumberButton('4')}}/>
          <NumberButton title={5} onPress={()=>{onPressNumberButton('5')}}/>
          <NumberButton title={6} onPress={()=>{onPressNumberButton('6')}}/>
          <NumberButton title={7} onPress={()=>{onPressNumberButton('7')}}/>
          <NumberButton title={8} onPress={()=>{onPressNumberButton('8')}}/>
          <NumberButton title={9} onPress={()=>{onPressNumberButton('9')}}/>
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
