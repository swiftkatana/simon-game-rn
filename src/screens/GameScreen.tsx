import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ButtonGame from '../components/ButtonGame';
import {soundUtil} from '../utils/soundUtil';
import {getRandomColor} from '../utils';

export type TColors = 'red' | 'blue' | 'green' | 'yellow' | '';

const GameScreen = () => {
  const [currentColor, setCurrentColor] = useState('');
  const [gameSteps, setGameSteps] = useState([]);
  const [userSteps, setUserSteps] = useState([]);

  useEffect(() => {
    // handle game start
    gameSteps.length === 0 && addStepToTheGame();
    setUserSteps([]);

    for (const step of gameSteps) {
      handleStepSoundAndAnimation(step);
    }
  }, [gameSteps]);

  useEffect(() => {
    if (userSteps.length > 0) {
      const lastUserStepIndex = userSteps.length - 1;
      const lastUserStep = userSteps[lastUserStepIndex];
      const equalStepOfGame = gameSteps[lastUserStepIndex];
      //TODO  need to add here check if user step is equal to game step
      //TODO and check if not so res the game
    }
  }, [userSteps]);

  const restSteps = () => {
    setGameSteps([]);
    setUserSteps([]);
  };

  const addStepToTheGame = () => {
    setGameSteps([...gameSteps, getRandomColor()]);
  };

  const handleButtonClick = (color: TColors) => {
    setUserSteps([...userSteps, color]);
    soundUtil.playSound(color);
  };

  const handleStepSoundAndAnimation = (color: TColors) => {
    soundUtil.playSound(color);
    setCurrentColor(color);
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.buttonsView}>
        <View style={styles.buttonView}>
          <ButtonGame
            currentColor={currentColor}
            onClick={handleButtonClick}
            color="red"
          />
          <ButtonGame
            currentColor={currentColor}
            onClick={handleButtonClick}
            color="blue"
          />
        </View>
        <View style={styles.buttonView}>
          <ButtonGame
            currentColor={currentColor}
            onClick={handleButtonClick}
            color="green"
          />
          <ButtonGame
            currentColor={currentColor}
            onClick={handleButtonClick}
            color="yellow"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsView: {
    flexDirection: 'row',
    flex: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonView: {
    flex: 0.4,
  },
});

export default GameScreen;
