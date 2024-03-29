import React, { useEffect, useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { COLORS } from "../../assets/style";
import mainImage from "../../assets/images/main.png";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentQuestion, setTimer, setCurrentAnswer, setAnswers } from "../../bll/reducer";
import { ClearButton } from "../components/ClearButton";
import { NumberButtonAnswer } from "../components/NumberButtonAnswer";
import { ArrowButton } from "../components/ArrowButton";
import { AnswerButton } from "../components/AnswerButton";

export const TestScreen = (props) => {
  const {navigation} = props;
  const [currentAnswerDone, setCurrentAnswerDone] = useState(false);
  const timer = useSelector((state) => state.app.timer);
  const forSpeed = useSelector((state) => state.app.forSpeed);
  const hard = useSelector((state) => state.app.hard);
  const currentQuestion = useSelector((state) => state.app.currentQuestion);
  const currentAnswer = useSelector((state) => state.app.currentAnswer);
  const answers = useSelector((state) => state.app.answers);
  const firstMultiplier = useSelector((state) => state.app.firstMultiplier);
  const secondMultiplier = useSelector((state) => state.app.secondMultiplier);
  const dispatch = useDispatch();

  const onPressNumberForAnswer = (number) => {
    dispatch(setCurrentAnswer(currentAnswer.concat(number)));
  };

  const onPressClearButton = () =>{
    dispatch(setCurrentAnswer(currentAnswer.slice(0, -1)));
  }

  const onPressNextButton = () => {
    if (currentQuestion < 15) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
      dispatch(setCurrentAnswer(""));
    } else if (currentQuestion === 15) {
      dispatch(setCurrentQuestion(15));
      dispatch(setCurrentAnswer(""));
    }
  };
  const onPressBackButton = () => {
    if (currentQuestion > 1) {
      dispatch(setCurrentQuestion(currentQuestion - 1));
      dispatch(setCurrentAnswer(""));
    } else if (currentQuestion === 1) {
      dispatch(setCurrentQuestion(1));
      dispatch(setCurrentAnswer(""));
    }
  };

  const onPressAnswer = () => {
    if (currentQuestion < 15) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
      const updateAnswers = {...answers}
      updateAnswers[currentQuestion] = currentAnswer
      dispatch(setAnswers(updateAnswers))
      dispatch(setCurrentAnswer(''))
    } else if (currentQuestion === 15) {
      const updateAnswers = {...answers}
      updateAnswers[currentQuestion] = currentAnswer
      dispatch(setAnswers(updateAnswers))
      dispatch(setCurrentAnswer(''))
      dispatch(setCurrentQuestion(15));
      navigation.navigate("Task", { screen: "ResultScreen", initial: false });
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      if (forSpeed && hard) {
        const time1 = window.setTimeout(() => {
          navigation.navigate("Task", { screen: "ResultScreen", initial: false });
        }, 33000);
        return () => clearTimeout(time1);
      } else if (forSpeed && !hard) {
        const time2 = window.setTimeout(() => {
          navigation.navigate("Task", { screen: "ResultScreen", initial: false });
        }, 64000);
        return () => clearTimeout(time2);
      } else if (!forSpeed) {
        const time3 = window.setTimeout(() => {
        }, 1000);
        return () => clearTimeout(time3);
      }
      return () => {};
    }, [forSpeed, hard])
  );

  useFocusEffect(
    React.useCallback(() => {
      hard ? dispatch(setTimer(30)) : dispatch(setTimer(60));
      return () => {};
    }, [forSpeed, hard])
  );

  useEffect(() => {
    if (forSpeed && timer > 1) {
      const tic = window.setInterval(() => {
        dispatch(setTimer(timer - 1));
      }, 1000);
      return () => clearInterval(tic);
    }
  }, [timer, forSpeed, hard]);

  useEffect(() => {
    currentAnswer === '' ? setCurrentAnswerDone(false) : setCurrentAnswerDone(true)
  }, [currentAnswer]);
  useEffect(() => {
   const currentAnswerIsDone = answers[currentQuestion] !== '' ? true : false
    setCurrentAnswerDone(currentAnswerIsDone)
  }, [answers, currentQuestion]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.sectionTop}>
        {forSpeed &&
          <View style={styles.sectionTimer}>
            <Image style={styles.sectionTimerLogo} source={mainImage} />
            <Text style={styles.sectionTimerText}>{timer}</Text>
          </View>
        }
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>{currentQuestion} из 15</Text>
        </View>
        <View></View>
      </View>

      <View style={styles.contentBlock}>
        <Text style={styles.contentBlockText}>
          {firstMultiplier[currentQuestion]} x {secondMultiplier[currentQuestion]} = {currentAnswerDone ? answers[currentQuestion] : currentAnswer}
        </Text>
      </View>

      <View style={styles.buttonsblock}>
        <View style={styles.buttonsblockLeft}>
          <NumberButtonAnswer title={"1"} onPress={() => {onPressNumberForAnswer("1")}} />
          <NumberButtonAnswer title={"2"} onPress={() => {onPressNumberForAnswer("2")}} />
          <NumberButtonAnswer title={"3"} onPress={() => {onPressNumberForAnswer("3")}} />
          <NumberButtonAnswer title={"4"} onPress={() => {onPressNumberForAnswer("4")}} />
          <NumberButtonAnswer title={"5"} onPress={() => {onPressNumberForAnswer("5")}} />
          <NumberButtonAnswer title={"6"} onPress={() => {onPressNumberForAnswer("6")}} />
          <NumberButtonAnswer title={"7"} onPress={() => {onPressNumberForAnswer("7")}} />
          <NumberButtonAnswer title={"8"} onPress={() => {onPressNumberForAnswer("8")}} />
          <NumberButtonAnswer title={"9"} onPress={() => {onPressNumberForAnswer("9")}} />
          <NumberButtonAnswer title={"0"} onPress={() => {onPressNumberForAnswer("0")}} />
        </View>
        <View style={styles.buttonsblockRight}>
          <ClearButton onPress={onPressClearButton} />
        </View>
      </View>

      <View style={styles.bottomButtonsBlock}>
        <ArrowButton onPress={onPressBackButton} direction={"left"} />
        <AnswerButton onPress={onPressAnswer} isDisabled={currentAnswerDone ? false : true}/>
        <ArrowButton onPress={onPressNextButton} direction={"right"} />
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
  sectionTop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10
  },
  sectionTimer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  sectionTimerLogo: {
    width: 50,
    height: 50,
    margin: 0
  },
  sectionTimerText: {
    fontSize: 25,
    color: COLORS.pink,
    fontWeight: "bold"
  },
  sectionTitleText: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "bold"
  },
  buttonsblock: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10
  },
  buttonsblockLeft: {
    width: Dimensions.get("window").width * 0.75,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  buttonsblockRight: {
    width: Dimensions.get("window").width * 0.25
  },
  bottomButtonsBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10
  }
});
