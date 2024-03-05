const intialState = {
  status: null
};

export const LoginReducer = (
  state = intialState,
  actions: { type: string; value: {} | string }
) => {
  switch (actions.type) {
    case "SIGNUP": {
      return {
        ...state,
        status: actions.value
      };
    }
    default: {
      return state;
    }
  }
};
