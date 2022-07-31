import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import gameImage from '../assets/imgs/game.png';
import resultImage from '../assets/imgs/results.png';
import React, {FC} from 'react';
import {Image} from 'react-native';
import {screenList, screenNames} from './screens';

const Tab = createBottomTabNavigator();
export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({size}) => {
            let imageSource;
            if (route.name === screenNames.GAME_SCREEN) {
              imageSource = gameImage;
            } else if (route.name === screenNames.GAME_RESULTS) {
              imageSource = resultImage;
            }

            // You can return any component that you like here!
            return (
              <Image style={{width: size, height: size}} source={imageSource} />
            );
          },
          tabBarActiveBackgroundColor: 'lightblue',
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}>
        {screenList.map((screen, index) => (
          <Tab.Screen key={index} {...screen} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
