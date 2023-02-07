const SET_CURRENT_NUMBER = 'SET_CURRENT_NUMBER';
const SET_HARD = 'SET_HARD';
const SET_FOR_SPEED = 'SET_FOR_SPEED';

const initialState = {
  currentNumber: '1',
  forSpeed: true,
  hard: true,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_NUMBER:
      return { ...state, currentNumber: action.currentNumber }
    case SET_HARD:
      return { ...state, hard: action.hard }
    case SET_FOR_SPEED:
      return { ...state, forSpeed: action.forSpeed }
    default:
      return state
  }
}

export const setCurrentNumber = currentNumber => ({type:SET_CURRENT_NUMBER, currentNumber});
export const setHard = hard => ({type:SET_HARD, hard});
export const setForSpeed = forSpeed => ({type:SET_FOR_SPEED, forSpeed});
