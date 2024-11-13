import Button from "react-bootstrap/Button";

export const CustomButton = ({ title, variant, onClick }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {title}
    </Button>
  );
};
