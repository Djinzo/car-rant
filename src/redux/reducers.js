import { ADD_COUNTER } from "./actions";

const defualtState = {
  counter: 0,
};

export const reducer = (state = defualtState, action) => {
  switch (action) {
    case ADD_COUNTER:
      return { counter: state.counter + 1 };
  }
};

// global state is imutable maktbedlch
