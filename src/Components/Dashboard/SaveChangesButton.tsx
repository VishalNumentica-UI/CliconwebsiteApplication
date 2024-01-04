interface propsTitle {
  title?: string;
}
export function SaveChangesButton(props: propsTitle) {
  return (
    <div className="p-2">
      <button className="button-color p-2">{props.title}</button>
    </div>
  );
}
