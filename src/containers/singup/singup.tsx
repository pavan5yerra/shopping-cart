import { InputField } from "../../components/inputfield/inputfield";
import { Button } from "../../components/button/button";
import { useSelector, useDispatch } from "react-redux";
import { registerNewUserInDataBase } from "../../store/actions/loginactions";
import { useNavigate } from "react-router-dom";
import "./singup.css";
import { useState } from "react";

export const Signup = () => {
  const loginData = useSelector(
    (state: { login: { status: boolean } }) => state.login.status
  );
  const dispatch = useDispatch();
  const [singupData, setSingupData] = useState({});
  const navigate = useNavigate();

  const handleSingup = (e: {
    target: { id: string; value: string | number };
  }) => {
    switch (e.target.id) {
      case "Name": {
        setSingupData((data) => {
          return { ...data, name: e.target.value };
        });
        break;
      }
      case "Age": {
        setSingupData((data) => {
          return { ...data, age: e.target.value };
        });
        break;
      }
      case "Email": {
        setSingupData((data) => {
          return { ...data, email: e.target.value };
        });
        break;
      }
      case "Password": {
        setSingupData((data) => {
          return { ...data, password: e.target.value };
        });
        break;
      }
    }
  };
  console.log("llog", loginData);
  if (loginData) {
    navigate("/home");
  }
  return (
    <div className="Form">
      <div>
        <h1>User Registration {loginData}</h1>
      </div>
      <form onChange={handleSingup}>
        {/* Labels and inputs for form data */}

        <InputField id="Name" name="Full Name" type="text" />
        <InputField id="Age" name="Age" type="text" />
        <InputField id="Email" name="Email" type="text" />
        <InputField id="Password" name="Password" type="password" />
        <Button
          id="Signup"
          name="Sign Up"
          action={() => dispatch(registerNewUserInDataBase(singupData))}
        />
      </form>
    </div>
  );
};
