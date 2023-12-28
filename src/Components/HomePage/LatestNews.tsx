
import { news_image1, news_image2, news_image3 } from "../../resources/images";
import { EachLatestNews } from "../../CommonFunctionalities/EachLatestNews";
import { Container } from "react-bootstrap";
export function LatestNews() {
  const latestNewsContent = [
    {
      image: news_image1,
      name: "Kristin",
      date: "19Dec, 2013",
      messengerCount: "453",
      title:
        "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
      description:
        "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.",
    },
    {
      image: news_image2,
      name: "Kristin",
      date: "19Dec, 2013",
      messengerCount: "453",
      title:
        "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
      description:
        "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.",
    },
    {
      image: news_image3,
      name: "Kristin",
      date: "19Dec, 2013",
      messengerCount: "453",
      title:
        "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
      description:
        "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.",
    },
  ];
  return (
    <Container className="mt-5 latestNews">
      <div className="text-center fs-4 ">Latest News</div>
      <div className="d-flex mt-3 p-4 justify-content-between">
        {latestNewsContent.map((news) => {
          return <EachLatestNews content={news} />;
        })}
      </div>
    </Container>
  );
}
