const SET_CURRENT_NUMBER = "SET_CURRENT_NUMBER";
const SET_HARD = "SET_HARD";
const SET_FOR_SPEED = "SET_FOR_SPEED";
const SET_TASK_BUTTONS = "SET_TASK_BUTTONS";
const SET_TIMER = 'SET_TIMER';

const initialState = {
  currentNumber: "1",
  forSpeed: true,
  hard: true,
  taskButtons: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  },
  timer: '0'
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_NUMBER:
      return { ...state, currentNumber: action.currentNumber };
    case SET_HARD:
      return { ...state, hard: action.hard };
    case SET_FOR_SPEED:
      return { ...state, forSpeed: action.forSpeed };
    case SET_TASK_BUTTONS:
      return { ...state, taskButtons: action.taskButtons };
    case SET_TIMER:
      return { ...state, timer: action.timer };
    default:
      return state;
  }
};

export const setCurrentNumber = currentNumber => ({ type: SET_CURRENT_NUMBER, currentNumber });
export const setHard = hard => ({ type: SET_HARD, hard });
export const setForSpeed = forSpeed => ({ type: SET_FOR_SPEED, forSpeed });
export const setTaskButtons = taskButtons => ({ type: SET_TASK_BUTTONS, taskButtons });
export const setTimer = timer => ({ type: SET_TIMER, timer });
