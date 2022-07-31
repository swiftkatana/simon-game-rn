import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {TColors} from '../screens/GameScreen';

type Props = {
  color: colors;
  onClick: (color: TColors) => void;
  currentColor: TColors;
};

const ButtonGame: FC<Props> = ({color, onClick, currentColor}) => {
  const useStyle = styles({color});
  const [fadeAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    if (currentColor === color) {
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentColor]);

  handleClick = () => {
    onClick(color);
  };

  return (
    <Animated.View style={{opacity: fadeAnim, flex: 1}}>
      <TouchableOpacity onPress={handleClick} style={useStyle.mainView} />
    </Animated.View>
  );
};

export default ButtonGame;

const styles = ({color}: Props) =>
  StyleSheet.create({
    mainView: {
      borderBottomRightRadius: color === 'yellow' ? 50 : 0,
      borderBottomLeftRadius: color === 'blue' ? 50 : 0,
      borderTopLeftRadius: color === 'red' ? 50 : 0,
      borderTopRightRadius: color === 'green' ? 50 : 0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color,
    },
  });
