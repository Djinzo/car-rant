import "./App.css";
import { Button, CustomButton } from "./component/Button";
import { CustomInput } from "./component/Input";

function App() {
  return (
    <div className="m-5">
      <CustomButton
        title={"click here"}
        variant="primary"
        onClick={() => console.log("event")}
      ></CustomButton>

      <CustomInput
        label="name"
        placeholder="this is used to show name placeholder"
        className="w-50"
      ></CustomInput>
    </div>
  );
}

export default App;
