import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { COLORS } from "../../assets/style";
import { setting } from "../../assets/images/setting.png";
import { StartButton } from "../components/StartButton";
import { NumberButton } from "../components/NumberButton";
import { setTaskButtons } from "../../bll/reducer";
import { useDispatch, useSelector } from "react-redux";
import { NumberTaskButton } from "../components/NumberTaskButton";

export const TaskScreen = (props) => {
  const {navigation} = props;
  const taskButtons = useSelector((state) => state.app.taskButtons)
  const dispatch = useDispatch();
  const onPressNumberButton = (number) => {
  const updateState = { ...taskButtons }
    updateState[number] = !updateState[number]
    dispatch(setTaskButtons(updateState))
  }

  const onPressStartTest = () => {
    navigation.navigate("Task", { screen: "TestScreen", initial: false });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Выберите числа для проверки</Text>
      </View>
      <View style={styles.row}>
        <NumberTaskButton title={"1"} onPress={() =>{onPressNumberButton('1')}} />
        <NumberTaskButton title={"2"} onPress={() =>{onPressNumberButton('2')}} />
        <NumberTaskButton title={"3"} onPress={() =>{onPressNumberButton('3')}} />
        <NumberTaskButton title={"4"} onPress={() =>{onPressNumberButton('4')}} />
        <NumberTaskButton title={"5"} onPress={() =>{onPressNumberButton('5')}} />
        <NumberTaskButton title={"6"} onPress={() =>{onPressNumberButton('6')}} />
        <NumberTaskButton title={"7"} onPress={() =>{onPressNumberButton('7')}} />
        <NumberTaskButton title={"8"} onPress={() =>{onPressNumberButton('8')}} />
        <NumberTaskButton title={"9"} onPress={() =>{onPressNumberButton('9')}} />
      </View>
      <View style={styles.buttonsBlock}>
        <StartButton title={"Начать тестирование"} icon={'settings'} onPress={onPressStartTest} />
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
