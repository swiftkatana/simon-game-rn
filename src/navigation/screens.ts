import {FC} from 'react';
import GameScreen from '../screens/GameScreen';
import GameResults from '../screens/GameResults';

export interface IScreenTab {
  name: string;
  component: FC;
}
export enum screenNames {
  GAME_SCREEN = 'Game Screen',
  GAME_RESULTS = 'Game Results',
}

export const screenList: IScreenTab[] = [
  {component: GameScreen, name: screenNames.GAME_SCREEN},
  {component: GameResults, name: screenNames.GAME_RESULTS},
];
