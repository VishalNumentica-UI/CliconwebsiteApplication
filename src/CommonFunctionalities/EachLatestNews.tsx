
import { Image } from "react-bootstrap";
import { calendar, contact, messenger } from "../icons/svgIcons";

export function EachLatestNews({ content }) {
  const { image, name, date, messengerCount, title, description } = content;
  return (
    <div>
      <div className="latestNews__newspages p-2">
        <div className="newsImage">
          <Image src={image} alt="" />
        </div>

        <div className="blogIcons d-flex justify-content-between p-2">
          <div className="blogIcon__Seperator d-flex p-2">
            <Image src={contact} alt="" fluid />
            <p className="pt-3">{name}</p>
          </div>

          <div className="blogIcon__Seperator d-flex p-2">
            <Image src={calendar} alt="" fluid />
            <p className="pt-3">{date}</p>
          </div>

          <div className="blogIcon__Seperator d-flex p-2">
            <Image src={messenger} alt="" fluid />
            <p className="pt-3">{messengerCount}</p>
          </div>
        </div>

        <p>{title}</p>

        <p>{description}</p>
        <button className="btn_Readmore">Read More &#8594;</button>
      </div>
    </div>
  );
}
