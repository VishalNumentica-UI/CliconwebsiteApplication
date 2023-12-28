
import { Image } from "react-bootstrap";

interface EachItemProps{
    eachItem?:{
      icon?:string,
    navTitle?:string
    }
}
export function EachDashboardItem({ eachItem }:EachItemProps) {
  const { icon,navTitle } = eachItem || {};
  return (
    <div className="d-flex gap-2 p-2">
      <div>
        <Image src={icon} alt="" />
      </div>
      <div>{navTitle}</div>
    </div>
  );
}


