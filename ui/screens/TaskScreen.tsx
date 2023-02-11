import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { COLORS } from "../../assets/style";
import { StartButton } from "../components/StartButton";
import { setTaskButtons, setFirstMultiplier, setSecondMultiplier } from "../../bll/reducer";
import { useDispatch, useSelector } from "react-redux";
import { NumberTaskButton } from "../components/NumberTaskButton";
import { numbers10 } from "../../assets/data/data";

export const TaskScreen = (props) => {
  const { navigation } = props;
  const taskButtons = useSelector((state) => state.app.taskButtons);
  const dispatch = useDispatch();
  const onPressNumberButton = (number) => {
    const updateState = { ...taskButtons };
    updateState[number] = !updateState[number];
    dispatch(setTaskButtons(updateState));
  };

  const onPressStartTest = () => {
    navigation.navigate("Task", { screen: "TestScreen", initial: false });


    const selectedNumbersArr = [];
    numbers10.map(item => {
      taskButtons[item] === true && selectedNumbersArr.push(item)
      return item
    })

    const updatedFirstMultiplier = {
      1: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
      2: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
      3: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
      4: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
      5: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
      6: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
      7: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
      8: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
      9: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
      10: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
      11: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
      12: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
      13: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
      14: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
      15: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
    }
    dispatch(setFirstMultiplier(updatedFirstMultiplier))

    const updatedSecondMultiplier = {
      1: numbers10[Math.floor(Math.random()*numbers10.length)],
      2: numbers10[Math.floor(Math.random()*numbers10.length)],
      3: numbers10[Math.floor(Math.random()*numbers10.length)],
      4: numbers10[Math.floor(Math.random()*numbers10.length)],
      5: numbers10[Math.floor(Math.random()*numbers10.length)],
      6: numbers10[Math.floor(Math.random()*numbers10.length)],
      7: numbers10[Math.floor(Math.random()*numbers10.length)],
      8: numbers10[Math.floor(Math.random()*numbers10.length)],
      9: numbers10[Math.floor(Math.random()*numbers10.length)],
      10: numbers10[Math.floor(Math.random()*numbers10.length)],
      11: numbers10[Math.floor(Math.random()*numbers10.length)],
      12: numbers10[Math.floor(Math.random()*numbers10.length)],
      13: numbers10[Math.floor(Math.random()*numbers10.length)],
      14: numbers10[Math.floor(Math.random()*numbers10.length)],
      15: numbers10[Math.floor(Math.random()*numbers10.length)],
    }
    dispatch(setSecondMultiplier(updatedSecondMultiplier))
  };

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
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Выберите числа для проверки</Text>
      </View>
      <View style={styles.row}>
        <NumberTaskButton title={"1"} onPress={() => {
          onPressNumberButton("1");
        }} />
        <NumberTaskButton title={"2"} onPress={() => {
          onPressNumberButton("2");
        }} />
        <NumberTaskButton title={"3"} onPress={() => {
          onPressNumberButton("3");
        }} />
        <NumberTaskButton title={"4"} onPress={() => {
          onPressNumberButton("4");
        }} />
        <NumberTaskButton title={"5"} onPress={() => {
          onPressNumberButton("5");
        }} />
        <NumberTaskButton title={"6"} onPress={() => {
          onPressNumberButton("6");
        }} />
        <NumberTaskButton title={"7"} onPress={() => {
          onPressNumberButton("7");
        }} />
        <NumberTaskButton title={"8"} onPress={() => {
          onPressNumberButton("8");
        }} />
        <NumberTaskButton title={"9"} onPress={() => {
          onPressNumberButton("9");
        }} />
      </View>
      <View style={styles.buttonsBlock}>
        <StartButton title={"Начать тестирование"} icon={"settings"} onPress={onPressStartTest} />
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
    padding: 10
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10
  },
  title: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "bold"
  },
  titleBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonsBlock: {}
});
