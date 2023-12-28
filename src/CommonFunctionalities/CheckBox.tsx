

export function CheckBox(props) {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label className="form-check-label" >
          {props.title}
        </label>
      </div>
    </div>
  );
}
