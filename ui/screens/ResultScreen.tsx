import React from "react";
import { useSelector } from "react-redux";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../assets/style";
import { numbers15 } from "../../assets/data/data";

export const ResultScreen = () => {
  const answers = useSelector((state) => state.app.answers);
  const firstMultiplier = useSelector((state) => state.app.firstMultiplier);
  const secondMultiplier = useSelector((state) => state.app.secondMultiplier);

  const correctAnswerArr = [];

  numbers15.map(item => {
    const currentAnswerCorrect = +firstMultiplier[item] * (+secondMultiplier[item]) === +answers[item] ? true : false;
    currentAnswerCorrect && correctAnswerArr.push(item);
    return item;
  });

  const correctAnswerNumber = correctAnswerArr.length;

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
        <Text style={styles.title}>Твой результат {correctAnswerNumber} верных ответов</Text>
      </View>
      <View style={styles.contentBlock}>

        {
          numbers15.map(item => {
            const currentAnswerCorrect = +firstMultiplier[item] * (+secondMultiplier[item]) === +answers[item] ? true : false;
            return <Text style={styles.itemBlock}>
              <Text style={styles.firstNumber}>{firstMultiplier[item]}</Text> X
              <Text style={styles.secondNumber}>{secondMultiplier[item]}</Text> =
              <Text style={currentAnswerCorrect ? styles.lastNumberGreen : styles.lastNumberRed}>{answers[item]}</Text></Text>;
          })
        }


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
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#000000"
  },
  lastNumberGreen: {
    color: "green",
  },
  lastNumberRed: {
    color: "red",
  }
});
