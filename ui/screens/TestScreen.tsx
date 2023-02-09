import React, {useEffect} from "react";
import {Dimensions, Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {COLORS} from "../../assets/style";
import mainImage from "../../assets/images/main.png";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentNumber} from "../../bll/reducer";
import {setTimer} from "../../bll/reducer";

export const TestScreen = () => {
    const timer = useSelector((state) => state.app.timer)
    const dispatch = useDispatch()

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(setTimer(timer+1))
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.timer}>
                <Image style={styles.timerLogo} source={mainImage}/>
                <Text style={styles.timerText}>{timer}</Text>
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
    timer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
    },
    timerLogo: {
        width: 50,
        height: 50,
        margin: 0,
    },
    timerText: {
        fontSize: 25,
        color: COLORS.pink,
        fontWeight: "bold"
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
