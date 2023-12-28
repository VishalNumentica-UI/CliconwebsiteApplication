

export function RadioButton(props) {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" >
          {props.title}
        </label>
      </div>
    </div>
  );
}
