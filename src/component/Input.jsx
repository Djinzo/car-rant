import { Col } from "react-bootstrap";

export const CustomInput = ({ label, placeholder, className }) => {
  return (
    <div className="d-flex flex-column">
      {label}
      <input
        type="text"
        placeholder={placeholder}
        className={className}
      ></input>
    </div>
  );
};
