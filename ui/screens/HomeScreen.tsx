import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StartButton } from "../components/StartButton";
import mainImage from "../../assets/images/main.png";
import { COLORS } from "../../assets/style";

export const HomeScreen = (props) => {
  const { navigation } = props;

  const onPressLearn = () => {
    navigation.navigate("Learn");
  };

  const onPressSettings = () => {
    navigation.navigate("Settings");
  };

  const onPressTest = () => {
    navigation.navigate("Test");
  };


  return (
    <SafeAreaView style={styles.wrapper}>

      <View style={styles.titleBlock}>
        <Image
          style={styles.image}
          source={mainImage}
        />
        <Text style={styles.title}>Таблица умножения</Text>
        <Text style={styles.title}>Тренажер</Text>
      </View>
      <View style={styles.btnsBlock}>
        <StartButton
          title={"Учить"}
          icon={"book"}
          onPress={onPressLearn}
          style={styles.button}>
        </StartButton>
        <StartButton
          title={"Настройки"}
          icon={"settings"}
          onPress={onPressSettings}
          style={styles.button}>
        </StartButton>
        <StartButton
          title={"Тренироваться"}
          icon={"test"}
          onPress={onPressTest}
          style={styles.button}>
        </StartButton>
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
    backgroundColor: COLORS.green
  },
  image: {
    width: 80,
    height: 80,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20
  },
  titleBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "bold"
  },
  btnsBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: Dimensions.get('window').height * 0.5,
  }
});
