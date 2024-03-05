import "./inputfield.css";

type inputprops = {
  action?: () => void;
  type: string;
  name: string;
  id: string;
};

export const InputField = (props: inputprops) => {
  return (
    <div className="InputField">
      <input
        id={props.id}
        className="input"
        placeholder={props.name}
        type={props.type}
      />
    </div>
  );
};
