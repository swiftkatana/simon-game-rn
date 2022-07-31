// create a slice for the game simon says

import {createSlice} from '@reduxjs/toolkit';

export interface IHistoryGame {
  player: string;
  status: 'win' | 'lose';
}

const initialState = {
  playerName: '',
  history: [],
  score: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    restGame: state => {
      state.score = 0;
      state.history = [];
    },
    addScore: state => {
      state.score++;
    },
    addHistory: (state, action) => {
      state.history.push(action.payload);
    },
    changePlayerName: (state, action) => {
      state.playerName = action.payload;
    },
  },
});

export const {
  startGame,
  addToSequence,
  addToPlayerSequence,
  resetPlayerSequence,
  resetSequence,
  incrementScore,
} = gameSlice.actions;

export default gameSlice.reducer;
