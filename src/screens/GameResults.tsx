import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const GameResults = () => {
  return (
    <View style={styles.mainView}>
      <Text>GameResults</Text>
    </View>
  );
};

export default GameResults;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
