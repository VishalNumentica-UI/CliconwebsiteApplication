import "../CommonFunctionalities/CommonFunctionalities.css";
export function AuthenticationButton(props) {
  return (
    <div>
      <div>
        <button className="d-grid gap-2 button-background p-2">
          {props.content} &#8594;
        </button>
      </div>
    </div>
  );
}
