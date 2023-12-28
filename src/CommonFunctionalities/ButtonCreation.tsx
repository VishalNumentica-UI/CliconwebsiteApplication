import { Button } from "react-bootstrap";

export function ButtonCreation(props) {
  return (
    <div>
      <Button
        style={{
          background: props.color === "orange" ? "#FA8232" : "#EBC80C",
          border: "none",
        }}
      >
        SHOP NOW &#8594;
      </Button>
    </div>
  );
}
