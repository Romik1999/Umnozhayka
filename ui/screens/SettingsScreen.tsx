import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ToggleSwitch} from '../components/ToggleSwitch';
import {COLORS} from '../../assets/style';
// @ts-ignore
import mainImage from '../../assets/images/main.png';
import {StartButton} from '../components/StartButton';
import {setHard, setForSpeed} from '../../bll/reducer';
import {useDispatch, useSelector} from 'react-redux';

export const SettingsScreen = (props) => {
  const {navigation} = props;
  const hard = useSelector((state) => state.app.hard);
  const forSpeed = useSelector((state) => state.app.forSpeed);
  const dispatch = useDispatch();
  const onToggleHard = () => {
    dispatch(setHard(!hard));
  };

  const onToggleForSpeed = () => {
    dispatch(setForSpeed(!forSpeed));
  };

  const onStartTest = () => {
    navigation.navigate("Task", { screen: "TaskScreen", initial: false });
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
        <Image style={styles.image} source={mainImage} />
        <Text style={styles.title}>Настройки</Text>
      </View>
      <View style={styles.switchBlock}>
        <View style={styles.switchRow}>
          <Text>1 минута</Text>
          <ToggleSwitch onToggleSwitch={onToggleHard} value={hard} />
          <Text>30 сек</Text>
        </View>
        <View style={styles.switchRow}>
          <Text>Без таймера</Text>
          <ToggleSwitch onToggleSwitch={onToggleForSpeed} value={forSpeed} />
          <Text>с таймером</Text>
        </View>
      </View>
      <StartButton
        title={'Начать тренировку'}
        icon={'settings'}
        onPress={onStartTest}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: Dimensions.get('window').height,
    backgroundColor: COLORS.green,
  },
  image: {
    width: 80,
    height: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
  },
  titleBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#000000',
    fontWeight: 'bold',
  },
  switchBlock: {
    // backgroundColor: "red"
  },
  switchRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
