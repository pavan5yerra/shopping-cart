export const registerNewUserInDataBase = (param: {}) => {
  return (dispatch) => {
    return fetch(
      "https://shopping-a9f93-default-rtdb.firebaseio.com/users.json",
      {
        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify(param),

        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    )
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: "SIGNUP",
          value: true
        })
      )
      .catch((err) =>
        dispatch({
          type: "SIGNUP",
          value: false
        })
      );
  };
};
