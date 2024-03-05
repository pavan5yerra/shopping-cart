import "./button.css";

type buttonprops = {
  action: () => void;
  name: string;
  id: string;
};

export const Button = (props: buttonprops) => {
  return (
    <button id={props.id} className="Button" onClick={props.action}>
      {" "}
      {props.name}{" "}
    </button>
  );
};
