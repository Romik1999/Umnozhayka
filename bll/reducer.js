const SET_CURRENT_NUMBER = "SET_CURRENT_NUMBER";
const SET_HARD = "SET_HARD";
const SET_FOR_SPEED = "SET_FOR_SPEED";
const SET_TASK_BUTTONS = "SET_TASK_BUTTONS";
const SET_TIMER = 'SET_TIMER';
const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';
const SET_CURRENT_ANSWER = 'SET_CURRENT_ANSWER';
const SET_ANSWERS = 'SET_ANSWERS';

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
  answers:{
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
    13: '',
    14: '',
    15: '',
  },
  timer: '0',
  currentQuestion: 1,
  currentAnswer: '',
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
    case SET_CURRENT_QUESTION:
      return { ...state, currentQuestion: action.currentQuestion };
    case SET_CURRENT_ANSWER:
      return { ...state, currentAnswer: action.currentAnswer };
    case SET_ANSWERS:
      return { ...state, answers: action.answers };
    default:
      return state;
  }
};

export const setCurrentNumber = currentNumber => ({ type: SET_CURRENT_NUMBER, currentNumber });
export const setHard = hard => ({ type: SET_HARD, hard });
export const setForSpeed = forSpeed => ({ type: SET_FOR_SPEED, forSpeed });
export const setTaskButtons = taskButtons => ({ type: SET_TASK_BUTTONS, taskButtons });
export const setTimer = timer => ({ type: SET_TIMER, timer });
export const setCurrentQuestion = currentQuestion => ({ type: SET_CURRENT_QUESTION, currentQuestion });
export const setCurrentAnswer = currentAnswer => ({ type: SET_CURRENT_ANSWER, currentAnswer });
export const setAnswers = answers => ({ type: SET_ANSWERS, answers });
